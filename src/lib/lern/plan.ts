import { currentLesson, lessons } from "@/content";
import { seededShuffle } from "@/lib/lern/match";
import type { Attempt, BlockKind, Lesson, LessonProgress, Question, Track } from "@/lib/lern/types";

export type PlanBlock = {
  index: number;
  kind: BlockKind;
  title: string;
  detail: string;
  lessonId: string;
};

export function planPattern(track: Track): BlockKind[] {
  if (track === "intensive") {
    return ["Lesson", "Lesson", "Drills", "Listening", "Output", "Lesson", "Lesson", "Drills", "Listening", "Output"];
  }
  return ["Lesson", "Drills", "Listening", "Output"];
}

function titleFor(kind: BlockKind, lesson: Lesson): string {
  if (kind === "Lesson") return lesson.title;
  if (kind === "Drills") return `Drills · ${lesson.grammar}`;
  if (kind === "Listening") return `Listen · ${lesson.title}`;
  return `Speak and write · ${lesson.title}`;
}

function detailFor(kind: BlockKind, lesson: Lesson): string {
  if (kind === "Lesson") return lesson.goal;
  if (kind === "Drills") return "Short recall from mistakes and this unit.";
  if (kind === "Listening") return "Hear the dialogue, then answer from it.";
  return lesson.speaking;
}

export function buildPlan(track: Track, progress: Record<string, LessonProgress>, week: number): PlanBlock[] {
  const lesson = currentLesson(progress, week);
  return planPattern(track).map((kind, index) => ({
    index,
    kind,
    lessonId: lesson.id,
    title: titleFor(kind, lesson),
    detail: detailFor(kind, lesson),
  }));
}

export function drillQuestions(attempts: Attempt[], seed: string): Question[] {
  const counts = new Map<string, number>();
  for (const attempt of attempts) {
    if (attempt.correct) continue;
    counts.set(attempt.error, (counts.get(attempt.error) ?? 0) + 1);
  }
  const top = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([error]) => error);
  let pool = lessons.flatMap((lesson) => lesson.questions);
  const focused = top.length ? pool.filter((question) => top.includes(question.error)) : pool;
  if (focused.length >= 4) pool = focused;
  return seededShuffle(pool, seed).slice(0, 6);
}

export function listenQuestions(lesson: Lesson): Question[] {
  const speakers = [...new Set(lesson.dialogue.map((line) => line.speaker))];
  const first = lesson.dialogue[0];
  const line = lesson.dialogue[Math.min(1, lesson.dialogue.length - 1)];
  const questions: Question[] = [];
  if (first && speakers.length > 1) {
    questions.push({
      id: `${lesson.id}-who`,
      type: "choice",
      prompt: "Who speaks first?",
      options: seededShuffle(speakers, `${lesson.id}-who`),
      answer: first.speaker,
      why: `${first.speaker} opens: ${first.de}`,
      error: "vocabulary",
    });
  }
  if (line) {
    const clean = line.de.replace(/[.!?]/g, "");
    const parts = clean.split(" ").filter(Boolean);
    const last = parts[parts.length - 1] ?? "";
    questions.push({
      id: `${lesson.id}-line`,
      type: "gap",
      prompt: `Finish the line from ${line.speaker}: ${parts.slice(0, -1).join(" ")} ___.`,
      answer: last,
      aliases: [line.de, clean],
      why: `The line is: ${line.de}`,
      error: "vocabulary",
    });
  }
  return questions;
}

export function topErrors(attempts: Attempt[]): { error: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const attempt of attempts) {
    if (attempt.correct) continue;
    counts.set(attempt.error, (counts.get(attempt.error) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([error, count]) => ({ error, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
}
