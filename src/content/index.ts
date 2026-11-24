import type { Lesson, Question, Vocab } from "@/lib/lern/types";
import { unit1 } from "@/content/unit1";
import { unit2 } from "@/content/unit2";
import { unit3 } from "@/content/unit3";

export const lessons: Lesson[] = [...unit1, ...unit2, ...unit3];

export const UNITS = [
  { id: 1 as const, title: "First contact", blurb: "Greet people, say your name, and handle numbers." },
  { id: 2 as const, title: "People and family", blurb: "Talk about family, age, and simple descriptions." },
  { id: 3 as const, title: "Daily routine and time", blurb: "Tell the time and describe your day." },
];

const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const questionOwner = new Map<string, { question: Question; lesson: Lesson }>();
for (const lesson of lessons) {
  for (const question of lesson.questions) questionOwner.set(question.id, { question, lesson });
}

export function lessonById(id: string): Lesson | undefined {
  return byId.get(id);
}

export function findQuestion(id: string): { question: Question; lesson: Lesson } | undefined {
  return questionOwner.get(id);
}

export function stepsFor(lesson: Lesson): string[] {
  if (lesson.kind === "checkpoint") return ["Quiz"];
  if (lesson.kind === "review") return ["Recap", "Practice", "Check"];
  return ["Warm-up", "Input", "Grammar", "Practice", "Produce", "Wrap-up"];
}

export function unitVocab(unit: number): Vocab[] {
  const seen = new Set<string>();
  const out: Vocab[] = [];
  for (const lesson of lessons) {
    if (lesson.unit !== unit || lesson.kind !== "lesson") continue;
    for (const vocab of lesson.vocab) {
      const key = `${vocab.article ?? ""}|${vocab.german.toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(vocab);
    }
  }
  return out;
}

export function currentLesson(done: Record<string, { done?: boolean } | undefined>, week: number): Lesson {
  const unit = week <= 1 ? 1 : week === 2 ? 2 : week === 3 ? 3 : 0;
  const pool = unit ? lessons.filter((lesson) => lesson.unit === unit) : lessons.filter((lesson) => lesson.kind !== "checkpoint");
  return pool.find((lesson) => !done[lesson.id]?.done) ?? pool[pool.length - 1] ?? lessons[0]!;
}
