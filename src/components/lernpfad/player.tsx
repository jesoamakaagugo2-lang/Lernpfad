import { useEffect, useState } from "react";
import { lessonById, stepsFor, unitVocab } from "@/content";
import { wordCount } from "@/lib/lern/dates";
import { seededShuffle } from "@/lib/lern/match";
import { speakGerman } from "@/lib/lern/speech";
import { EMPTY_PROGRESS, useStudy } from "@/lib/lern/store";
import { intervalLabel } from "@/lib/lern/srs";
import { SPEAK_CHECKS, WRITE_CHECKS, type Rating } from "@/lib/lern/types";
import { QuestionRunner } from "@/components/lernpfad/practice";
import { Button, Eyebrow, GermanWord, Panel } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";
import { toast } from "sonner";

export function Player({ lessonId, embedded = false }: { lessonId: string; embedded?: boolean }) {
  const lesson = lessonById(lessonId);
  const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
  const saveProgress = useStudy((s) => s.saveProgress);
  const addVocab = useStudy((s) => s.addVocab);
  const setView = useStudy((s) => s.setView);
  const cards = useStudy((s) => s.cards);
  const rateCard = useStudy((s) => s.rateCard);
  const [showEn, setShowEn] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!lesson || lesson.kind !== "lesson") return;
    if (saved.step < 1 && saved.furthest < 1) return;
    addVocab(lesson.id, lesson.vocab);
  }, [lesson, saved.step, saved.furthest, addVocab]);

  if (!lesson) {
    return (
      <p className="p-4">
        That lesson is not in this build.{" "}
        <button type="button" className="font-semibold text-spruce" onClick={() => setView("lessons")}>
          Back to lessons
        </button>
      </p>
    );
  }

  const steps = stepsFor(lesson);
  const step = Math.min(saved.step, steps.length - 1);
  const due = cards.filter((card) => card.due <= Date.now()).slice(0, 5);
  const warm = due[0];

  function go(next: number) {
    const clamped = Math.max(0, Math.min(steps.length - 1, next));
    if (clamped > saved.furthest + 1) return;
    saveProgress(lesson!.id, { step: clamped, furthest: Math.max(saved.furthest, clamped) });
  }

  return (
    <div className="flex flex-col gap-5">
      {!embedded && (
        <button type="button" className="self-start text-sm font-semibold text-spruce" onClick={() => setView("lessons")}>
          All lessons
        </button>
      )}
      <div>
        <Eyebrow>
          Unit {lesson.unit} · {lesson.indexLabel} · {lesson.grammar}
        </Eyebrow>
        <h2 className="mt-1 font-display text-3xl leading-tight">{lesson.title}</h2>
        <p className="mt-2 text-muted">{lesson.goal}</p>
      </div>
      {lesson.kind !== "checkpoint" && (
        <ol className="flex gap-2 overflow-x-auto pb-1">
          {steps.map((label, index) => {
            const open = index <= saved.furthest;
            return (
              <li key={label}>
                <button
                  type="button"
                  disabled={!open && index !== step}
                  onClick={() => go(index)}
                  className={cn(
                    "min-h-11 rounded-full px-3 text-sm font-semibold whitespace-nowrap",
                    index === step ? "bg-spruce-fill text-spruce-ink" : "bg-paper-2 text-muted",
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ol>
      )}

      {lesson.kind === "checkpoint" && <Checkpoint lessonId={lesson.id} />}

      {lesson.kind === "review" && step === 0 && (
        <div className="flex flex-col gap-4">
          <Dialogue lessonId={lesson.id} showEn={showEn} onToggle={() => setShowEn((v) => !v)} />
          <p className="text-sm text-muted">A few words from this unit. They enter your deck from the lessons, not again here.</p>
          <ul className="grid gap-2">
            {seededShuffle(unitVocab(lesson.unit), lesson.id)
              .slice(0, 8)
              .map((vocab) => (
                <li key={vocab.german} className="flex items-baseline justify-between gap-3 rounded-xl bg-paper-2 px-3 py-2">
                  <GermanWord article={vocab.article} german={vocab.german} />
                  <span className="text-sm text-muted">{vocab.english}</span>
                </li>
              ))}
          </ul>
          <Button onClick={() => go(1)}>Continue to practice</Button>
        </div>
      )}
      {lesson.kind === "review" && step === 1 && (
        <div className="flex flex-col gap-4">
          <QuestionRunner questions={lesson.questions} lessonId={lesson.id} />
          <Button variant="soft" onClick={() => go(2)}>
            Continue to the checklist
          </Button>
        </div>
      )}
      {lesson.kind === "review" && step === 2 && <WrapUp lessonId={lesson.id} />}

      {lesson.kind === "lesson" && step === 0 && (
        <div className="flex flex-col gap-4">
          <Eyebrow>Warm-up · {Math.min(due.length, 5)} due</Eyebrow>
          {warm ? (
            <Panel>
              <p className="text-sm text-muted">{due.length} due</p>
              <p className="mt-2 font-display text-3xl">
                <GermanWord article={warm.article} german={warm.german} />
              </p>
              {revealed ? (
                <div className="mt-3">
                  <p>{warm.english}</p>
                  <p className="mt-1 text-sm text-muted">{warm.example}</p>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {(["again", "hard", "good", "easy"] as Rating[]).map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="min-h-12 rounded-xl bg-paper-2 text-sm font-semibold capitalize"
                        onClick={() => {
                          rateCard(warm.id, rating);
                          setRevealed(false);
                        }}
                      >
                        {rating}
                        <span className="mt-0.5 block text-xs font-normal text-muted">{intervalLabel(warm, rating)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <Button className="mt-4" variant="soft" onClick={() => setRevealed(true)}>
                  Show meaning
                </Button>
              )}
            </Panel>
          ) : (
            <p className="text-muted">Nothing is due. A clean start.</p>
          )}
          <Button onClick={() => go(1)}>Continue to the dialogue</Button>
        </div>
      )}

      {lesson.kind === "lesson" && step === 1 && (
        <div className="flex flex-col gap-4">
          <Dialogue lessonId={lesson.id} showEn={showEn} onToggle={() => setShowEn((v) => !v)} />
          <div className="grid gap-2">
            {lesson.vocab.map((vocab) => (
              <div key={`${vocab.article ?? ""}-${vocab.german}`} className="rounded-xl border border-line bg-card px-3 py-3">
                <p className="text-lg">
                  <GermanWord article={vocab.article} german={vocab.german} />
                </p>
                <p className="text-sm text-muted">
                  {vocab.english}
                  {vocab.plural ? ` · plural ${vocab.plural}` : ""}
                </p>
                <p className="mt-1">{vocab.example}</p>
              </div>
            ))}
          </div>
          <Button onClick={() => go(2)}>Continue to grammar</Button>
        </div>
      )}

      {lesson.kind === "lesson" && step === 2 && lesson.grammarNote && (
        <div className="flex flex-col gap-4">
          <Panel>
            <p className="font-display text-2xl">{lesson.grammarNote.lead}</p>
            <p className="mt-3">{lesson.grammarNote.rule}</p>
            <p className="mt-3 text-muted">{lesson.grammarNote.contrast}</p>
          </Panel>
          <ul className="grid gap-2">
            {lesson.grammarNote.examples.map((example) => (
              <li key={example.de} className="rounded-xl bg-paper-2 px-3 py-3">
                <p>{example.de}</p>
                <p className="text-sm text-muted">{example.en}</p>
              </li>
            ))}
          </ul>
          {lesson.grammarNote.table && (
            <table className="w-full text-left text-sm">
              <tbody>
                {lesson.grammarNote.table.map((row) => (
                  <tr key={row.a} className="border-b border-line">
                    <th className="py-2 pr-3 font-semibold">{row.a}</th>
                    <td className="py-2">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {lesson.letters && (
            <ul className="grid grid-cols-4 gap-2 sm:grid-cols-7">
              {lesson.letters.map((letter) => (
                <li key={letter.g}>
                  <button
                    type="button"
                    className="w-full rounded-xl border border-line bg-card px-2 py-2 text-center"
                    onClick={() => speakGerman(letter.name, 0.85)}
                  >
                    <span className="block font-display text-xl">{letter.g}</span>
                    <span className="text-xs text-muted">{letter.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {lesson.grids?.map((grid) => (
            <div key={grid.title}>
              <h3 className="mb-2 font-semibold">{grid.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {grid.items.map((item) => (
                  <li key={item}>
                    <button type="button" className="min-h-11 rounded-full bg-paper-2 px-3 text-sm font-semibold" onClick={() => speakGerman(item)}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Button onClick={() => go(3)}>Continue to practice</Button>
        </div>
      )}

      {lesson.kind === "lesson" && step === 3 && (
        <div className="flex flex-col gap-4">
          <QuestionRunner questions={lesson.questions} lessonId={lesson.id} />
          <Button variant="soft" onClick={() => go(4)}>
            Continue to speaking and writing
          </Button>
        </div>
      )}
      {lesson.kind === "lesson" && step === 4 && <Produce lessonId={lesson.id} />}
      {lesson.kind === "lesson" && step === 4 && (
        <Button variant="soft" onClick={() => go(5)}>
          Continue to wrap-up
        </Button>
      )}
      {lesson.kind === "lesson" && step === 5 && <WrapUp lessonId={lesson.id} />}
    </div>
  );
}

function Dialogue({
  lessonId,
  showEn,
  onToggle,
}: {
  lessonId: string;
  showEn: boolean;
  onToggle: () => void;
}) {
  const lesson = lessonById(lessonId);
  if (!lesson) return null;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Button
          variant="soft"
          onClick={() => {
            const first = lesson.dialogue[0];
            if (first) speakGerman(lesson.dialogue.map((line) => line.de).join(" "));
          }}
        >
          Play all
        </Button>
        <Button variant="ghost" onClick={onToggle}>
          {showEn ? "Hide English" : "English"}
        </Button>
      </div>
      {lesson.dialogue.map((line, index) => (
        <div key={`${line.speaker}-${index}`} className="rounded-2xl border border-line bg-card px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">{line.speaker}</p>
            <button type="button" className="text-sm font-semibold text-spruce" onClick={() => speakGerman(line.de)}>
              Play
            </button>
          </div>
          <p className="mt-1 text-lg">{line.de}</p>
          {showEn ? <p className="mt-1 text-sm text-muted">{line.en}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function Produce({ lessonId }: { lessonId: string }) {
  const lesson = lessonById(lessonId);
  const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
  const saveProgress = useStudy((s) => s.saveProgress);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  if (!lesson) return null;
  const count = wordCount(saved.writing);

  async function toggleRec() {
    if (recording && recorder) {
      recorder.stop();
      setRecording(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const next = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      next.ondataavailable = (event) => {
        if (event.data.size) chunks.push(event.data);
      };
      next.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        const url = URL.createObjectURL(new Blob(chunks, { type: next.mimeType || "audio/webm" }));
        setAudioUrl(url);
      };
      next.start();
      setRecorder(next);
      setRecording(true);
    } catch {
      toast("Microphone unavailable. Use the checklist anyway.");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <Eyebrow>Speaking</Eyebrow>
        <p className="mt-2 text-lg">{lesson.speaking}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="soft" onClick={() => void toggleRec()}>
            {recording ? "Stop recording" : "Record"}
          </Button>
        </div>
        {audioUrl ? <audio className="mt-3 w-full" controls src={audioUrl} /> : null}
        <p className="mt-2 text-sm text-muted">The recording stays in this session, on this device.</p>
        <ul className="mt-3 grid gap-2">
          {SPEAK_CHECKS.map((label, index) => (
            <li key={label}>
              <label className="flex min-h-11 items-center gap-3">
                <input
                  type="checkbox"
                  checked={saved.speak[index] ?? false}
                  onChange={(event) => {
                    const speak = [...saved.speak];
                    speak[index] = event.target.checked;
                    saveProgress(lesson.id, { speak });
                  }}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </Panel>
      {lesson.writing ? (
        <Panel>
          <Eyebrow>Writing</Eyebrow>
          <p className="mt-2">{lesson.writing}</p>
          <textarea
            className="mt-3 min-h-36 w-full rounded-xl border border-line bg-paper px-3 py-3 outline-none focus:border-spruce"
            value={saved.writing}
            onChange={(event) => saveProgress(lesson.id, { writing: event.target.value })}
            aria-label="Writing draft"
          />
          <p className={cn("mt-2 text-sm", count >= lesson.writingWords ? "text-spruce" : "text-muted")}>
            {count} / {lesson.writingWords} words
          </p>
          <ul className="mt-3 grid gap-2">
            {WRITE_CHECKS.map((label, index) => (
              <li key={label}>
                <label className="flex min-h-11 items-center gap-3">
                  <input
                    type="checkbox"
                    checked={saved.writeChecks[index] ?? false}
                    onChange={(event) => {
                      const writeChecks = [...saved.writeChecks];
                      writeChecks[index] = event.target.checked;
                      saveProgress(lesson.id, { writeChecks });
                    }}
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
          <Button
            className="mt-3"
            variant="soft"
            onClick={() => {
              void navigator.clipboard.writeText(saved.writing).then(
                () => toast("Copied. A tutor or partner can correct it."),
                () => toast("Select the text and copy it manually."),
              );
            }}
          >
            Copy text
          </Button>
        </Panel>
      ) : null}
    </div>
  );
}

function WrapUp({ lessonId }: { lessonId: string }) {
  const lesson = lessonById(lessonId);
  const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
  const saveProgress = useStudy((s) => s.saveProgress);
  const addVocab = useStudy((s) => s.addVocab);
  const setView = useStudy((s) => s.setView);
  useEffect(() => {
    if (lesson?.vocab.length) addVocab(lesson.id, lesson.vocab);
  }, [lesson, addVocab]);
  if (!lesson) return null;
  return (
    <div className="flex flex-col gap-4">
      <p>Tick only what you can actually do. You can still mark the lesson complete and review later.</p>
      <ul className="grid gap-2">
        {lesson.canDo.map((item, index) => (
          <li key={item}>
            <label className="flex min-h-12 items-start gap-3 rounded-xl bg-paper-2 px-3 py-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={saved.canDo[index] ?? false}
                onChange={(event) => {
                  const canDo = [...saved.canDo];
                  canDo[index] = event.target.checked;
                  saveProgress(lesson.id, { canDo });
                }}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          saveProgress(lesson.id, { done: true });
          setView("lessons");
          toast(saved.done ? "Still marked complete." : "Lesson marked complete.");
        }}
      >
        {saved.done ? "Completed" : "Mark lesson complete"}
      </Button>
    </div>
  );
}

function Checkpoint({ lessonId }: { lessonId: string }) {
  const lesson = lessonById(lessonId);
  const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
  const saveProgress = useStudy((s) => s.saveProgress);
  const [showEn, setShowEn] = useState(false);
  const [run, setRun] = useState(0);
  if (!lesson) return null;
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">70% passes. You get the answer after each item, and the first try counts.</p>
      {lesson.passage && (
        <Panel>
          <Eyebrow>Read</Eyebrow>
          <p className="mt-2 text-lg">{lesson.passage.de}</p>
          <button type="button" className="mt-2 text-sm font-semibold text-spruce" onClick={() => setShowEn((v) => !v)}>
            {showEn ? "Hide English" : "Show English"}
          </button>
          {showEn ? <p className="mt-2 text-sm text-muted">{lesson.passage.en}</p> : null}
        </Panel>
      )}
      <QuestionRunner
        key={run}
        questions={lesson.questions}
        lessonId={lesson.id}
        onDone={({ correct, total }) => {
          const pct = Math.round((100 * correct) / Math.max(1, total));
          const pass = pct >= 70;
          saveProgress(lesson.id, {
            quizLast: pct,
            quizBest: Math.max(saved.quizBest ?? 0, pct),
            done: pass ? true : saved.done,
          });
        }}
      />
      {saved.quizLast != null && (
        <p className="text-sm text-muted">
          Last score {saved.quizLast}%. Best {saved.quizBest ?? saved.quizLast}%. {saved.done ? "Checkpoint passed." : "Not passed yet."}
        </p>
      )}
      <Button variant="soft" onClick={() => setRun((n) => n + 1)}>
        Try the checkpoint again
      </Button>
    </div>
  );
}
