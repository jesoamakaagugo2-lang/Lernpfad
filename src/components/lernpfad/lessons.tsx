import { useMemo, useState } from "react";
import { lessons, stepsFor, UNITS } from "@/content";
import { useStudy } from "@/lib/lern/store";
import { Button, Eyebrow, Field, Page, Panel } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";
import { Player } from "@/components/lernpfad/player";

export function Lessons() {
  const progress = useStudy((s) => s.progress);
  const openLesson = useStudy((s) => s.openLesson);
  const [mode, setMode] = useState<"path" | "reference">("path");
  const [query, setQuery] = useState("");

  const pages = useMemo(
    () => lessons.filter((lesson) => lesson.grammarNote),
    [],
  );
  const filtered = pages.filter((lesson) => {
    const hay = `${lesson.grammar} ${lesson.grammarNote?.rule ?? ""} ${lesson.title}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });

  return (
    <Page>
      <div>
        <Eyebrow>A1 · Units 1–3</Eyebrow>
        <h1 className="mt-1 font-display text-4xl">Lessons</h1>
        <p className="mt-2 text-muted">Five lessons, a review and a checkpoint in each unit. Later units are not in this build.</p>
      </div>
      <div className="flex rounded-full bg-paper-2 p-1">
        {(["path", "reference"] as const).map((item) => (
          <button
            key={item}
            type="button"
            className={cn("min-h-11 flex-1 rounded-full text-sm font-semibold capitalize", mode === item ? "bg-card" : "text-muted")}
            onClick={() => setMode(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {mode === "path" &&
        UNITS.map((unit) => (
          <section key={unit.id} className="flex flex-col gap-2">
            <div>
              <Eyebrow>Unit {unit.id}</Eyebrow>
              <h2 className="font-display text-2xl">{unit.title}</h2>
              <p className="text-sm text-muted">{unit.blurb}</p>
            </div>
            {lessons
              .filter((lesson) => lesson.unit === unit.id)
              .map((lesson) => {
                const state = progress[lesson.id];
                const steps = stepsFor(lesson);
                const label = state?.done
                  ? "Done"
                  : state
                    ? `Step ${Math.min(state.step + 1, steps.length)} of ${steps.length}`
                    : "Not started";
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => openLesson(lesson.id)}
                    className="flex min-h-20 items-center gap-3 rounded-2xl border border-line bg-card px-3 py-3 text-left"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-paper-2 font-display text-lg">{lesson.indexLabel}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{lesson.title}</span>
                      <span className="block text-sm text-muted">{lesson.goal}</span>
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-muted uppercase">{label}</span>
                  </button>
                );
              })}
          </section>
        ))}
      {mode === "reference" && (
        <div className="flex flex-col gap-3">
          <Field value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search grammar" aria-label="Search grammar" />
          {filtered.map((lesson) => (
            <Panel key={lesson.id}>
              <Eyebrow>
                Unit {lesson.unit} · {lesson.grammar}
              </Eyebrow>
              <h2 className="mt-1 font-display text-2xl">{lesson.grammarNote?.lead}</h2>
              <p className="mt-2">{lesson.grammarNote?.rule}</p>
              <p className="mt-2 text-sm text-muted">{lesson.grammarNote?.contrast}</p>
              <Button className="mt-3" variant="soft" onClick={() => openLesson(lesson.id)}>
                Open lesson
              </Button>
            </Panel>
          ))}
          {!filtered.length && <p className="text-muted">No grammar page matches that.</p>}
        </div>
      )}
    </Page>
  );
}

export function LessonRoute() {
  const id = useStudy((s) => s.activeLessonId);
  if (!id) return <Lessons />;
  return (
    <Page>
      <Player lessonId={id} />
    </Page>
  );
}
