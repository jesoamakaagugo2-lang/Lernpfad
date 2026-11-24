import { BookOpen, Check, Flame, Headphones, PenLine, Target } from "lucide-react";
import { lessonById } from "@/content";
import { daysBetween, fmt, greeting, longDate, streak, studyWeek, todayISO } from "@/lib/lern/dates";
import { buildPlan, type PlanBlock } from "@/lib/lern/plan";
import { primeAudio } from "@/lib/lern/speech";
import { remainingSec, useStudy } from "@/lib/lern/store";
import type { BlockKind } from "@/lib/lern/types";
import { Button, Eyebrow, Meter, Page, Panel } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";
import { useNow } from "@/components/lernpfad/engine";

const ICONS: Record<BlockKind, typeof BookOpen> = {
  Lesson: BookOpen,
  Drills: Target,
  Listening: Headphones,
  Output: PenLine,
};

export function Today() {
  const profile = useStudy((s) => s.profile);
  const progress = useStudy((s) => s.progress);
  const cards = useStudy((s) => s.cards);
  const doneBlocks = useStudy((s) => s.doneBlocks);
  const benchmarks = useStudy((s) => s.benchmarks);
  const timer = useStudy((s) => s.timer);
  const startBlock = useStudy((s) => s.startBlock);
  const setView = useStudy((s) => s.setView);
  const now = useNow(1000);
  if (!profile) return null;

  const today = todayISO();
  const week = studyWeek(profile.startDate, today);
  const totalWeeks = profile.track === "intensive" ? 10 : 24;
  const plan = buildPlan(profile.track, progress, week);
  const done = doneBlocks[today] ?? [];
  const next = plan.find((block) => !done.includes(block.index)) ?? null;
  const due = cards.filter((card) => card.due <= now).length;
  const lesson = next ? lessonById(next.lessonId) : lessonById(plan[0]?.lessonId ?? "");
  const unitLabel = week <= 3 ? `Unit ${Math.min(week, 3)} · ${lesson?.unitTitle ?? ""}` : "Review Units 1–3";
  const benchmark = benchmarks.find((item) => item.week === Math.min(week, 10));
  const dayStreak = streak(doneBlocks, today);

  let examLine = `Week ${week} of ${totalWeeks}`;
  let examProgress = Math.min(1, week / totalWeeks);
  if (profile.examDate) {
    const span = Math.max(1, daysBetween(profile.startDate, profile.examDate));
    const gone = daysBetween(profile.startDate, today);
    examProgress = Math.max(0, Math.min(1, gone / span));
    const left = daysBetween(today, profile.examDate);
    examLine = left >= 0 ? `${left} days to the exam` : "Exam date has passed";
  }

  function begin(block: PlanBlock) {
    primeAudio();
    startBlock({ index: block.index, kind: block.kind, lessonId: block.lessonId });
  }

  return (
    <Page>
      <div>
        <Eyebrow>{longDate()}</Eyebrow>
        <h1 className="mt-1 font-display text-4xl leading-tight">
          {greeting()}, {profile.name}.
        </h1>
        <p className="mt-2 text-muted">
          Week {Math.min(week, totalWeeks)} · {unitLabel}
        </p>
      </div>

      {timer && timer.phase !== "rate" ? (
        <button
          type="button"
          className="flex min-h-14 items-center justify-between rounded-2xl bg-spruce-fill px-4 text-spruce-ink"
          onClick={() => setView("focus")}
        >
          <span>{timer.phase === "break" ? "Break running" : "Block paused"}</span>
          <span className="font-display text-2xl tabular-nums">{fmt(remainingSec(timer, now))}</span>
        </button>
      ) : null}

      <Panel className="border-transparent bg-spruce-fill text-spruce-ink">
        <Eyebrow>
          <span className="text-spruce-ink/80">{next ? "Next block" : "Today"}</span>
        </Eyebrow>
        <h2 className="mt-1 font-display text-3xl leading-tight">{next ? next.title : "Today’s blocks are done."}</h2>
        <p className="mt-2 text-spruce-ink/90">{next ? next.detail : "Review cards, or start an extra block if you still have attention left."}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {next ? (
            <Button className="bg-card text-ink" onClick={() => begin(next)}>
              Start {profile.focusMin} min
            </Button>
          ) : (
            <>
              <Button className="bg-card text-ink" onClick={() => setView("cards")}>
                Review cards
              </Button>
              <Button
                className="bg-spruce text-spruce-ink"
                onClick={() => {
                  const lessonId = plan[0]?.lessonId;
                  if (!lessonId) return;
                  primeAudio();
                  startBlock({ index: -1, kind: "Lesson", lessonId });
                }}
              >
                Extra lesson
              </Button>
            </>
          )}
        </div>
      </Panel>

      <div className="grid grid-cols-3 gap-2">
        <Stat label="Blocks" value={`${done.length}/${plan.length}`} />
        <Stat label="Cards due" value={String(due)} />
        <Stat label="Streak" value={`${dayStreak}d`} icon />
      </div>

      {profile.track === "intensive" && (
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 10 }, (_, index) => (
            <span key={index} className={cn("h-1.5 flex-1 rounded-full", index + 1 < week ? "bg-spruce-fill" : index + 1 === Math.min(week, 10) ? "bg-clay" : "bg-line")} />
          ))}
        </div>
      )}

      <div>
        <div className="mb-2 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">Today’s plan</h2>
          <span className="text-sm text-muted">{profile.focusMin} min blocks</span>
        </div>
        <ol className="grid gap-2">
          {plan.map((block) => {
            const Icon = ICONS[block.kind];
            const complete = done.includes(block.index);
            return (
              <li key={block.index}>
                <button
                  type="button"
                  onClick={() => begin(block)}
                  className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-line bg-card px-3 py-3 text-left"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-spruce-soft text-spruce">
                    {complete ? <Check size={18} /> : <Icon size={18} />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{block.title}</span>
                    <span className="block text-sm text-muted">
                      {block.kind} · {profile.focusMin} min
                    </span>
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-muted uppercase">{complete ? "Done" : "Start"}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {benchmark && (
        <button type="button" className="rounded-2xl border border-line bg-card p-4 text-left" onClick={() => setView("progress")}>
          <Eyebrow>Week {benchmark.week} benchmark</Eyebrow>
          <p className="mt-1 font-semibold">{benchmark.target}</p>
          <p className="mt-2 text-sm text-muted">{benchmark.status === "pending" ? "Not logged yet" : benchmark.status === "pass" ? "Passed" : "Not yet"}</p>
        </button>
      )}

      <Panel>
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h2 className="font-display text-xl">Path</h2>
          <span className="text-sm text-muted">{examLine}</span>
        </div>
        <Meter value={examProgress} label="Progress toward the plan" />
      </Panel>
    </Page>
  );
}

function Stat({ label, value, icon = false }: { label: string; value: string; icon?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-card px-3 py-3">
      <p className="flex items-center gap-1 text-xs font-semibold tracking-widest text-muted uppercase">
        {icon ? <Flame size={12} /> : null}
        {label}
      </p>
      <p className="mt-1 font-display text-2xl">{value}</p>
    </div>
  );
}
