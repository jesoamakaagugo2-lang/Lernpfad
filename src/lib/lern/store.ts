import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { freshBenchmarks } from "@/content/benchmarks";
import { todayISO } from "@/lib/lern/dates";
import { cardKey, schedule } from "@/lib/lern/srs";
import type {
  Attempt,
  Benchmark,
  BlockKind,
  Card,
  LessonProgress,
  Log,
  Profile,
  Rating,
  ReviewMark,
  TimerState,
  View,
  Vocab,
} from "@/lib/lern/types";

function uid(): string {
  return Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}

export function blankProgress(): LessonProgress {
  return {
    step: 0,
    furthest: 0,
    canDo: [],
    speak: [],
    writeChecks: [],
    writing: "",
    done: false,
    quizBest: null,
    quizLast: null,
  };
}

export const EMPTY_PROGRESS: LessonProgress = blankProgress();

function memoryStorage(): Pick<Storage, "getItem" | "setItem" | "removeItem"> {
  return { getItem: () => null, setItem: () => undefined, removeItem: () => undefined };
}

type StudyState = {
  profile: Profile | null;
  cards: Card[];
  logs: Log[];
  progress: Record<string, LessonProgress>;
  benchmarks: Benchmark[];
  attempts: Attempt[];
  reviews: ReviewMark[];
  doneBlocks: Record<string, number[]>;
  timer: TimerState | null;
  view: View;
  activeLessonId: string | null;
  setProfile: (profile: Profile) => void;
  updateProfile: (patch: Partial<Profile>) => void;
  setView: (view: View) => void;
  openLesson: (id: string) => void;
  saveProgress: (id: string, patch: Partial<LessonProgress>) => void;
  addVocab: (lessonId: string, items: Vocab[]) => number;
  patchCard: (id: string, patch: Partial<Card>) => void;
  rateCard: (id: string, rating: Rating) => void;
  logAttempt: (attempt: Omit<Attempt, "id" | "at">) => void;
  setBenchmark: (week: number, patch: Partial<Benchmark>) => void;
  startBlock: (input: { index: number; kind: BlockKind; lessonId: string }) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  interrupt: () => void;
  endWork: () => void;
  submitFocus: (focus: number) => void;
  skipBreak: () => void;
  finishBreak: () => void;
  resetAll: () => void;
};

function workActual(timer: TimerState, now = Date.now()): number {
  const left =
    timer.running && timer.endsAt != null
      ? Math.max(0, Math.ceil((timer.endsAt - now) / 1000))
      : timer.remainingSec;
  return Math.max(0, timer.plannedSec - left);
}

function leftover(timer: TimerState, now = Date.now()): number {
  if (timer.running && timer.endsAt != null) return Math.max(0, Math.ceil((timer.endsAt - now) / 1000));
  return timer.remainingSec;
}

export const useStudy = create<StudyState>()(
  persist(
    (set, get) => ({
      profile: null,
      cards: [],
      logs: [],
      progress: {},
      benchmarks: [],
      attempts: [],
      reviews: [],
      doneBlocks: {},
      timer: null,
      view: "today",
      activeLessonId: null,
      setProfile: (profile) =>
        set({
          profile,
          benchmarks: get().benchmarks.length ? get().benchmarks : freshBenchmarks(),
          view: "today",
        }),
      updateProfile: (patch) => set({ profile: get().profile ? { ...get().profile!, ...patch } : get().profile }),
      setView: (view) => set({ view }),
      openLesson: (id) => set({ view: "lesson", activeLessonId: id }),
      saveProgress: (id, patch) => {
        const prev = get().progress[id] ?? blankProgress();
        set({ progress: { ...get().progress, [id]: { ...prev, ...patch } } });
      },
      addVocab: (lessonId, items) => {
        const have = new Set(get().cards.map(cardKey));
        const now = Date.now();
        const fresh: Card[] = [];
        for (const item of items) {
          const key = cardKey(item);
          if (have.has(key)) continue;
          have.add(key);
          fresh.push({
            id: uid(),
            ...item,
            lessonId,
            due: now,
            interval: 0,
            ease: 2.5,
            reps: 0,
            lapses: 0,
          });
        }
        if (fresh.length) set({ cards: [...get().cards, ...fresh] });
        return fresh.length;
      },
      patchCard: (id, patch) => set({ cards: get().cards.map((card) => (card.id === id ? { ...card, ...patch } : card)) }),
      rateCard: (id, rating) => {
        const card = get().cards.find((item) => item.id === id);
        if (!card) return;
        const next = schedule(card, rating);
        set({
          cards: get().cards.map((item) => (item.id === id ? next : item)),
          reviews: [...get().reviews, { cardId: id, rating, at: Date.now() }].slice(-400),
        });
      },
      logAttempt: (attempt) =>
        set({
          attempts: [...get().attempts, { ...attempt, id: uid(), at: Date.now() }].slice(-300),
        }),
      setBenchmark: (week, patch) =>
        set({
          benchmarks: get().benchmarks.map((item) => (item.week === week ? { ...item, ...patch } : item)),
        }),
      startBlock: (input) => {
        const profile = get().profile;
        if (!profile) return;
        const prev = get().timer;
        let logs = get().logs;
        if (prev && prev.phase !== "break") {
          logs = [
            ...logs,
            {
              id: uid(),
              date: todayISO(),
              kind: prev.kind,
              planned: prev.plannedSec,
              actual: workActual(prev),
              completed: false,
              interruptions: prev.interruptions,
              focus: null,
              startedAt: prev.startedAt,
              lessonId: prev.lessonId,
              blockIndex: prev.blockIndex,
            },
          ];
        }
        const sec = profile.focusMin * 60;
        const now = Date.now();
        set({
          logs,
          view: "focus",
          activeLessonId: input.lessonId,
          timer: {
            phase: "work",
            kind: input.kind,
            lessonId: input.lessonId,
            blockIndex: input.index,
            plannedSec: sec,
            startedAt: now,
            endsAt: now + sec * 1000,
            remainingSec: sec,
            running: true,
            interruptions: 0,
            breakLong: false,
          },
        });
      },
      pauseTimer: () => {
        const timer = get().timer;
        if (!timer?.running || timer.endsAt == null) return;
        set({
          timer: {
            ...timer,
            running: false,
            endsAt: null,
            remainingSec: Math.max(0, Math.ceil((timer.endsAt - Date.now()) / 1000)),
          },
        });
      },
      resumeTimer: () => {
        const timer = get().timer;
        if (!timer || timer.running || timer.phase === "rate") return;
        set({ timer: { ...timer, running: true, endsAt: Date.now() + timer.remainingSec * 1000 } });
      },
      interrupt: () => {
        const timer = get().timer;
        if (!timer || timer.phase !== "work") return;
        set({ timer: { ...timer, interruptions: timer.interruptions + 1 } });
      },
      endWork: () => {
        const timer = get().timer;
        if (!timer || timer.phase !== "work") return;
        set({
          timer: { ...timer, phase: "rate", running: false, endsAt: null, remainingSec: leftover(timer) },
        });
      },
      submitFocus: (focus) => {
        const timer = get().timer;
        const profile = get().profile;
        if (!timer || !profile || timer.phase !== "rate") return;
        const date = todayISO();
        const log: Log = {
          id: uid(),
          date,
          kind: timer.kind,
          planned: timer.plannedSec,
          actual: Math.max(0, timer.plannedSec - timer.remainingSec),
          completed: true,
          interruptions: timer.interruptions,
          focus,
          startedAt: timer.startedAt,
          lessonId: timer.lessonId,
          blockIndex: timer.blockIndex,
        };
        const prevDone = get().doneBlocks[date] ?? [];
        const doneBlocks =
          timer.blockIndex >= 0 && !prevDone.includes(timer.blockIndex)
            ? { ...get().doneBlocks, [date]: [...prevDone, timer.blockIndex] }
            : get().doneBlocks;
        const count = doneBlocks[date]?.length ?? 0;
        const long = count > 0 && count % 4 === 0;
        const breakSec = (long ? profile.longBreak : profile.shortBreak) * 60;
        const now = Date.now();
        set({
          logs: [...get().logs, log],
          doneBlocks,
          timer: {
            phase: "break",
            kind: timer.kind,
            lessonId: timer.lessonId,
            blockIndex: timer.blockIndex,
            plannedSec: breakSec,
            startedAt: now,
            endsAt: now + breakSec * 1000,
            remainingSec: breakSec,
            running: true,
            interruptions: 0,
            breakLong: long,
          },
        });
      },
      skipBreak: () => {
        const timer = get().timer;
        if (!timer || timer.phase !== "break") {
          set({ timer: null, view: "today" });
          return;
        }
        const actual = Math.max(0, timer.plannedSec - leftover(timer));
        set({
          logs: [
            ...get().logs,
            {
              id: uid(),
              date: todayISO(),
              kind: "Break",
              planned: timer.plannedSec,
              actual,
              completed: false,
              interruptions: 0,
              focus: null,
              startedAt: timer.startedAt,
              lessonId: null,
              blockIndex: -1,
            },
          ],
          timer: null,
          view: "today",
        });
      },
      finishBreak: () => {
        const timer = get().timer;
        if (!timer || timer.phase !== "break") {
          set({ timer: null, view: "today" });
          return;
        }
        set({
          logs: [
            ...get().logs,
            {
              id: uid(),
              date: todayISO(),
              kind: "Break",
              planned: timer.plannedSec,
              actual: timer.plannedSec,
              completed: true,
              interruptions: 0,
              focus: null,
              startedAt: timer.startedAt,
              lessonId: null,
              blockIndex: -1,
            },
          ],
          timer: null,
          view: "today",
        });
      },
      resetAll: () =>
        set({
          profile: null,
          cards: [],
          logs: [],
          progress: {},
          benchmarks: [],
          attempts: [],
          reviews: [],
          doneBlocks: {},
          timer: null,
          view: "today",
          activeLessonId: null,
        }),
    }),
    {
      name: "lernpfad-v1",
      version: 1,
      skipHydration: true,
      storage: createJSONStorage(() => (typeof window === "undefined" ? memoryStorage() : localStorage)),
      partialize: (state) => ({
        profile: state.profile,
        cards: state.cards,
        logs: state.logs,
        progress: state.progress,
        benchmarks: state.benchmarks,
        attempts: state.attempts,
        reviews: state.reviews,
        doneBlocks: state.doneBlocks,
        timer: state.timer,
      }),
    },
  ),
);

export function remainingSec(timer: TimerState, now: number): number {
  if (timer.running && timer.endsAt != null) return Math.max(0, Math.ceil((timer.endsAt - now) / 1000));
  return timer.remainingSec;
}
