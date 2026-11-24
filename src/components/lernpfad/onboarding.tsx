import { useState } from "react";
import { todayISO } from "@/lib/lern/dates";
import { useStudy } from "@/lib/lern/store";
import type { Track } from "@/lib/lern/types";
import { Button, Eyebrow } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";

export function Onboarding() {
  const setProfile = useStudy((s) => s.setProfile);
  const [name, setName] = useState("");
  const [track, setTrack] = useState<Track>("intensive");
  const [startDate, setStartDate] = useState(todayISO());
  const [examDate, setExamDate] = useState("");
  const invalidExam = examDate !== "" && examDate < startDate;

  return (
    <main className="min-h-dvh bg-paper text-ink">
      <form
        className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-10"
        onSubmit={(event) => {
          event.preventDefault();
          if (!name.trim() || invalidExam) return;
          setProfile({
            name: name.trim(),
            track,
            startDate,
            examDate: examDate || null,
            focusMin: 25,
            shortBreak: 5,
            longBreak: 25,
            theme: "light",
            text: "md",
            vibrate: true,
            reviewLimit: 150,
            newLimit: 25,
          });
        }}
      >
        <div>
          <p className="font-display text-4xl">Lernpfad</p>
          <p className="mt-2 text-muted">A daily path from zero German to B1. Active recall, short blocks, original lessons.</p>
        </div>
        <label className="block">
          <Eyebrow>Your name</Eyebrow>
          <input
            id="learner-name"
            required
            maxLength={40}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="What should we call you?"
            className="mt-2 min-h-12 w-full rounded-xl border border-line bg-card px-3 outline-none focus:border-spruce"
          />
        </label>
        <fieldset>
          <legend className="text-xs font-semibold tracking-widest text-muted uppercase">How you want to study</legend>
          <div className="mt-2 grid gap-2">
            {(
              [
                ["intensive", "Intensive", "10 weeks · about 5 hours · 10 blocks a day"],
                ["standard", "Standard", "24 weeks · about 2 hours · 4 blocks a day"],
              ] as const
            ).map(([value, title, detail]) => (
              <label
                key={value}
                className={cn(
                  "block cursor-pointer rounded-2xl border bg-card px-4 py-4",
                  track === value ? "border-2 border-spruce" : "border-line",
                )}
              >
                <input className="sr-only" type="radio" name="track" checked={track === value} onChange={() => setTrack(value)} />
                <span className="block font-display text-2xl">{title}</span>
                <span className="mt-1 block text-sm text-muted">{detail}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            Start date
            <input
              type="date"
              required
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              className="mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3 font-normal"
            />
          </label>
          <label className="text-sm font-semibold">
            Exam date
            <input
              type="date"
              value={examDate}
              onChange={(event) => setExamDate(event.target.value)}
              className="mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3 font-normal"
            />
          </label>
        </div>
        {invalidExam ? <p className="text-sm text-clay">The exam date needs to be after the start date.</p> : null}
        <Button type="submit" disabled={!name.trim() || invalidExam}>
          Start week 1
        </Button>
        <p className="text-sm text-muted">Ten weeks is a serious plan, not a promise of an exam result. Your study stays on this device.</p>
      </form>
    </main>
  );
}
