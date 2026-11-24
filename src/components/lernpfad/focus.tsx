import { lessonById } from "@/content";
import { fmt } from "@/lib/lern/dates";
import { speakGerman } from "@/lib/lern/speech";
import { remainingSec, useStudy } from "@/lib/lern/store";
import { DrillRun, ListenPanel } from "@/components/lernpfad/practice";
import { Player, Produce } from "@/components/lernpfad/player";
import { Button, Eyebrow, Ring } from "@/components/lernpfad/ui";
import { useNow } from "@/components/lernpfad/engine";

const TIPS: { title: string; body: string; listen?: boolean }[] = [
  { title: "Stretch", body: "Stand up, roll your shoulders, and look far away for twenty seconds." },
  { title: "Water", body: "Leave the screen and drink a glass of water." },
  { title: "Breathe", body: "Four slow breaths, then the next block." },
  { title: "One slow line", body: "Listen once. Do not study it.", listen: true },
];

export function Focus() {
  const timer = useStudy((s) => s.timer);
  const pauseTimer = useStudy((s) => s.pauseTimer);
  const resumeTimer = useStudy((s) => s.resumeTimer);
  const interrupt = useStudy((s) => s.interrupt);
  const endWork = useStudy((s) => s.endWork);
  const submitFocus = useStudy((s) => s.submitFocus);
  const skipBreak = useStudy((s) => s.skipBreak);
  const setView = useStudy((s) => s.setView);
  const now = useNow();

  if (!timer) return null;
  const left = remainingSec(timer, now);
  const progress = timer.plannedSec ? left / timer.plannedSec : 0;
  const tip = TIPS[Math.abs(timer.blockIndex) % TIPS.length] ?? TIPS[0]!;
  const lesson = lessonById(timer.lessonId);

  function leave() {
    if (timer && timer.running && timer.phase !== "rate") pauseTimer();
    setView("today");
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-paper px-4 py-3">
        <button type="button" className="min-h-11 px-2 text-sm font-semibold" onClick={leave}>
          Close
        </button>
        <div className="flex-1 text-center">
          <p className="font-display text-3xl tabular-nums">{fmt(left)}</p>
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            {timer.phase === "break" ? (timer.breakLong ? "Long break" : "Short break") : timer.phase === "rate" ? "Block complete" : timer.kind}
          </p>
        </div>
        {timer.phase === "rate" ? (
          <span className="w-16" />
        ) : (
          <button
            type="button"
            className="min-h-11 px-2 text-sm font-semibold"
            onClick={() => (timer.running ? pauseTimer() : resumeTimer())}
          >
            {timer.running ? "Pause" : "Resume"}
          </button>
        )}
      </header>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 py-5 pb-28">
        {timer.phase === "work" && (
          <>
            <div className="flex justify-center">
              <div className="relative grid place-items-center">
                <Ring progress={progress} />
                <p className="absolute text-xs font-semibold tracking-widest text-muted uppercase">Focus</p>
              </div>
            </div>
            {timer.kind === "Lesson" && <Player lessonId={timer.lessonId} embedded />}
            {timer.kind === "Drills" && <DrillRun />}
            {timer.kind === "Listening" && <ListenPanel lessonId={timer.lessonId} />}
            {timer.kind === "Output" && <Produce lessonId={timer.lessonId} />}
          </>
        )}
        {timer.phase === "rate" && (
          <div className="flex flex-col gap-4">
            <Eyebrow>How was the focus?</Eyebrow>
            <h2 className="font-display text-3xl">One number, then a break.</h2>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={score}
                  type="button"
                  className="min-h-14 rounded-2xl border border-line bg-card font-display text-2xl"
                  onClick={() => submitFocus(score)}
                >
                  {score}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted">1 scattered, 5 fully there. This is a note to yourself, not a grade.</p>
          </div>
        )}
        {timer.phase === "break" && (
          <div className="flex flex-col items-center gap-4 text-center">
            <Ring progress={progress} tone="clay" className="size-48" />
            <Eyebrow>{timer.breakLong ? "Long break" : "Short break"}</Eyebrow>
            <h2 className="font-display text-3xl">{tip.title}</h2>
            <p className="max-w-sm text-muted">{tip.body}</p>
            {tip.listen && lesson?.dialogue[0] ? (
              <Button variant="soft" onClick={() => speakGerman(lesson.dialogue[0]!.de, 0.75)}>
                Play one slow line
              </Button>
            ) : null}
            <Button variant="ghost" onClick={skipBreak}>
              Skip break
            </Button>
          </div>
        )}
      </div>
      {timer.phase === "work" && (
        <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-card px-4 py-3">
          <div className="mx-auto flex max-w-2xl items-center gap-2">
            <button type="button" className="min-h-12 flex-1 text-sm font-semibold text-muted" onClick={interrupt}>
              Distraction {timer.interruptions > 0 ? `(${timer.interruptions})` : ""}
            </button>
            <Button className="flex-1" onClick={endWork}>
              Finish block
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
}
