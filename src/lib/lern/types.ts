export type Article = "der" | "die" | "das";
export type BlockKind = "Lesson" | "Drills" | "Listening" | "Output";
export type Rating = "again" | "hard" | "good" | "easy";
export type Track = "intensive" | "standard";
export type LessonKind = "lesson" | "review" | "checkpoint";
export type View = "today" | "lessons" | "lesson" | "cards" | "progress" | "settings" | "focus";

export type ErrorKind =
  | "verb"
  | "word-order"
  | "article"
  | "pronoun"
  | "spelling"
  | "vocabulary"
  | "time"
  | "possessive"
  | "number";

export type Vocab = {
  german: string;
  english: string;
  article?: Article;
  plural?: string;
  example: string;
};

export type Line = { speaker: string; de: string; en: string };

export type GrammarNote = {
  lead: string;
  rule: string;
  contrast: string;
  examples: { de: string; en: string }[];
  table?: { a: string; b: string }[];
};

export type Question = {
  id: string;
  type: "gap" | "choice" | "order" | "type";
  prompt: string;
  answer: string;
  why: string;
  error: ErrorKind;
  options?: string[];
  words?: string[];
  aliases?: string[];
};

export type Lesson = {
  id: string;
  unit: 1 | 2 | 3;
  unitTitle: string;
  indexLabel: string;
  title: string;
  goal: string;
  grammar: string;
  minutes: number;
  kind: LessonKind;
  dialogue: Line[];
  passage?: { de: string; en: string };
  grammarNote?: GrammarNote;
  letters?: { g: string; name: string }[];
  grids?: { title: string; items: string[] }[];
  vocab: Vocab[];
  questions: Question[];
  speaking: string;
  writing: string;
  writingWords: number;
  canDo: string[];
};

export type Profile = {
  name: string;
  track: Track;
  startDate: string;
  examDate: string | null;
  focusMin: number;
  shortBreak: number;
  longBreak: number;
  theme: "light" | "dark";
  text: "sm" | "md" | "lg";
  vibrate: boolean;
  reviewLimit: number;
  newLimit: number;
};

export type Card = {
  id: string;
  german: string;
  english: string;
  article?: Article;
  plural?: string;
  example: string;
  lessonId: string;
  due: number;
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
};

export type Log = {
  id: string;
  date: string;
  kind: BlockKind | "Break";
  planned: number;
  actual: number;
  completed: boolean;
  interruptions: number;
  focus: number | null;
  startedAt: number;
  lessonId: string | null;
  blockIndex: number;
};

export type LessonProgress = {
  step: number;
  furthest: number;
  canDo: boolean[];
  speak: boolean[];
  writeChecks: boolean[];
  writing: string;
  done: boolean;
  quizBest: number | null;
  quizLast: number | null;
};

export type Benchmark = {
  week: number;
  target: string;
  result: string;
  status: "pending" | "pass" | "fail";
  score: number | null;
};

export type Attempt = {
  id: string;
  lessonId: string;
  questionId: string;
  answer: string;
  correct: boolean;
  error: ErrorKind;
  at: number;
};

export type ReviewMark = {
  cardId: string;
  rating: Rating;
  at: number;
};

export type TimerState = {
  phase: "work" | "rate" | "break";
  kind: BlockKind;
  lessonId: string;
  blockIndex: number;
  plannedSec: number;
  startedAt: number;
  endsAt: number | null;
  remainingSec: number;
  running: boolean;
  interruptions: number;
  breakLong: boolean;
};

export const ERROR_LABEL: Record<ErrorKind, string> = {
  verb: "Verb form",
  "word-order": "Word order",
  article: "Article",
  pronoun: "Pronoun",
  spelling: "Spelling",
  vocabulary: "Vocabulary",
  time: "Time",
  possessive: "Possessive",
  number: "Number",
};

export const SPEAK_CHECKS = [
  "Clear pronunciation",
  "Correct word order",
  "Used the target grammar",
  "Spoke without long pauses",
];

export const WRITE_CHECKS = [
  "A greeting or a name is there",
  "Nouns start with a capital letter",
  "I used the target grammar",
  "I checked ä, ö, ü and ß",
];
