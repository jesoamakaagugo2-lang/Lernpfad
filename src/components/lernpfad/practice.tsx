import { useEffect, useRef, useState } from "react";
import { lessonById } from "@/content";
import { todayISO } from "@/lib/lern/dates";
import { matchesAnswer, seededShuffle } from "@/lib/lern/match";
import { drillQuestions, listenQuestions } from "@/lib/lern/plan";
import { canSpeak, speakGerman, speakLines, stopSpeak } from "@/lib/lern/speech";
import { useStudy } from "@/lib/lern/store";
import type { Question } from "@/lib/lern/types";
import { Button, Eyebrow, Field } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";

export function QuestionRunner({
  questions,
  lessonId,
  onDone,
}: {
  questions: Question[];
  lessonId: string;
  onDone?: (result: { correct: number; total: number }) => void;
}) {
  const logAttempt = useStudy((s) => s.logAttempt);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [picked, setPicked] = useState<number[]>([]);
  const [result, setResult] = useState<{ ok: boolean; hint: boolean } | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const reported = useRef(false);
  const question = questions[index];

  useEffect(() => {
    setValue("");
    setPicked([]);
    setResult(null);
  }, [index]);

  useEffect(() => {
    if (!finished || reported.current) return;
    reported.current = true;
    onDone?.({ correct, total: questions.length });
  }, [finished, correct, questions.length, onDone]);

  if (!questions.length) {
    return <p className="text-muted">No questions in this set yet.</p>;
  }
  if (finished || !question) {
    const pct = Math.round((100 * correct) / questions.length);
    return (
      <div className="rounded-2xl bg-paper-2 p-4">
        <Eyebrow>Result</Eyebrow>
        <p className="mt-1 font-display text-3xl">
          {correct} of {questions.length}
        </p>
        <p className="mt-2 text-muted">{pct >= 70 ? "That holds. Keep going." : "Review the misses, then try the set again later."}</p>
      </div>
    );
  }

  const bank = question.words ?? [];
  const order = seededShuffle(bank.map((word, wordIndex) => ({ word, wordIndex })), question.id);
  const built = picked.map((wordIndex) => bank[wordIndex]).join(" ");

  function commit(text: string) {
    if (result) return;
    const marked = matchesAnswer(text, question.answer, question.aliases);
    setResult(marked);
    if (marked.ok) setCorrect((count) => count + 1);
    logAttempt({
      lessonId,
      questionId: question.id,
      answer: text,
      correct: marked.ok,
      error: question.error,
    });
  }

  function next() {
    if (index + 1 >= questions.length) setFinished(true);
    else setIndex((n) => n + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>
        Question {index + 1} of {questions.length}
      </Eyebrow>
      <p className="font-display text-2xl leading-tight">{question.prompt}</p>
      {question.type === "choice" && (
        <div className="grid gap-2">
          {(question.options ?? []).map((option) => (
            <button
              key={option}
              type="button"
              disabled={!!result}
              onClick={() => commit(option)}
              className={cn(
                "min-h-12 rounded-xl border px-4 text-left font-semibold",
                result && option === question.answer && "border-spruce bg-spruce-soft",
                result && option !== question.answer && "opacity-60",
                !result && "border-line bg-card",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {question.type === "gap" || question.type === "type" ? (
        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            commit(value);
          }}
        >
          <Field
            value={value}
            onChange={(event) => setValue(event.target.value)}
            disabled={!!result}
            placeholder="Type in German"
            aria-label="Your answer"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <Button type="submit" disabled={!!result || !value.trim()}>
            Check
          </Button>
        </form>
      ) : null}
      {question.type === "order" && (
        <div className="flex flex-col gap-3">
          <div className="min-h-14 rounded-xl border border-dashed border-line bg-paper px-3 py-3 text-lg">
            {built || <span className="text-muted">Tap the words in order.</span>}
          </div>
          <div className="flex flex-wrap gap-2">
            {order.map(({ word, wordIndex }) => {
              const used = picked.includes(wordIndex);
              return (
                <button
                  key={`${question.id}-${wordIndex}`}
                  type="button"
                  disabled={used || !!result}
                  onClick={() => setPicked((list) => [...list, wordIndex])}
                  className="min-h-11 rounded-full border border-line bg-card px-4 font-semibold disabled:opacity-30"
                >
                  {word}
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Button variant="soft" onClick={() => setPicked((list) => list.slice(0, -1))} disabled={!picked.length || !!result}>
              Undo
            </Button>
            <Button onClick={() => commit(built)} disabled={picked.length !== bank.length || !!result}>
              Check
            </Button>
          </div>
        </div>
      )}
      {result && (
        <div className={cn("rounded-xl px-4 py-3 text-sm", result.ok ? "bg-spruce-soft" : "bg-clay-soft")} aria-live="polite">
          <p className="font-semibold">{result.ok ? "Correct." : "Not quite."}</p>
          {result.hint ? <p className="mt-1">Close enough. Prefer this spelling: {question.answer}</p> : null}
          {!result.ok ? <p className="mt-1">Answer: {question.answer}</p> : null}
          <p className="mt-1">{question.why}</p>
          <Button className="mt-3" onClick={next}>
            {index + 1 >= questions.length ? "See result" : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
}

export function ListenPanel({ lessonId }: { lessonId: string }) {
  const lesson = lessonById(lessonId);
  const [rate, setRate] = useState(0.9);
  const [showText, setShowText] = useState(true);
  const [showEn, setShowEn] = useState(false);
  const [questions] = useState(() => (lesson ? listenQuestions(lesson) : []));
  if (!lesson) return <p>This lesson is missing.</p>;
  const lines = lesson.dialogue;
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>Listening</Eyebrow>
      <h2 className="font-display text-3xl">{lesson.title}</h2>
      <p className="text-sm text-muted">The voice is your device’s German voice, not a studio recording.</p>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            if (!canSpeak()) return;
            speakLines(
              lines.map((line) => line.de),
              rate,
            );
          }}
          disabled={!lines.length || !canSpeak()}
        >
          Play dialogue
        </Button>
        <Button variant="soft" onClick={() => stopSpeak()}>
          Stop
        </Button>
        <Button variant="soft" onClick={() => setRate((n) => (n > 0.85 ? 0.75 : 1))}>
          {rate < 0.85 ? "Slow" : rate > 0.95 ? "Normal" : "Clear"}
        </Button>
        <Button variant="ghost" onClick={() => setShowText((v) => !v)}>
          {showText ? "Hide text" : "Show text"}
        </Button>
        <Button variant="ghost" onClick={() => setShowEn((v) => !v)}>
          {showEn ? "Hide English" : "English"}
        </Button>
      </div>
      {!canSpeak() ? <p className="text-sm text-muted">This browser has no speech voice. Read the lines aloud.</p> : null}
      {showText && (
        <div className="flex flex-col gap-3">
          {lines.map((line, index) => (
            <div key={`${line.speaker}-${index}`} className="rounded-2xl border border-line bg-card px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">{line.speaker}</p>
                <button type="button" className="text-sm font-semibold text-spruce" onClick={() => speakGerman(line.de, rate)}>
                  Play
                </button>
              </div>
              <p className="mt-1 text-lg">{line.de}</p>
              {showEn ? <p className="mt-1 text-sm text-muted">{line.en}</p> : null}
            </div>
          ))}
        </div>
      )}
      {lesson.passage ? (
        <p className="rounded-2xl bg-paper-2 p-4 text-lg">{showText ? lesson.passage.de : "Text hidden. Listen, then reveal it if you need to."}</p>
      ) : null}
      <QuestionRunner questions={questions} lessonId={lesson.id} />
    </div>
  );
}

export function DrillRun() {
  const [questions] = useState(() => drillQuestions(useStudy.getState().attempts, todayISO()));
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>Drills</Eyebrow>
      <h2 className="font-display text-3xl">Retrieve it.</h2>
      <p className="text-muted">Six items, weighted toward mistakes when you have some.</p>
      <QuestionRunner questions={questions} lessonId="drill" />
    </div>
  );
}
