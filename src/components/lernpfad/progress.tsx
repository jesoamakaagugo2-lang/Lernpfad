import { useState } from "react";
import { findQuestion } from "@/content";
import { ERROR_LABEL } from "@/lib/lern/types";
import { bucket, inWeek, studyWeek, todayISO } from "@/lib/lern/dates";
import { topErrors } from "@/lib/lern/plan";
import { primeAudio } from "@/lib/lern/speech";
import { useStudy } from "@/lib/lern/store";
import { Button, Eyebrow, Page, Panel } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";

export function Progress() {
  const profile = useStudy((s) => s.profile);
  const logs = useStudy((s) => s.logs);
  const cards = useStudy((s) => s.cards);
  const benchmarks = useStudy((s) => s.benchmarks);
  const attempts = useStudy((s) => s.attempts);
  const reviews = useStudy((s) => s.reviews);
  const doneBlocks = useStudy((s) => s.doneBlocks);
  const setBenchmark = useStudy((s) => s.setBenchmark);
  const startBlock = useStudy((s) => s.startBlock);
  const progress = useStudy((s) => s.progress);
  const [weekPick, setWeekPick] = useState(() => Math.min(10, profile ? studyWeek(profile.startDate) : 1));

  if (!profile) return null;
  const week = studyWeek(profile.startDate);
  const weekLogs = logs.filter((log) => inWeek(log.date, profile.startDate, week) && log.kind !== "Break");
  const seconds = weekLogs.reduce((sum, log) => sum + log.actual, 0);
  const hours = seconds / 3600;
  const completion = weekLogs.length ? weekLogs.filter((log) => log.completed).length / weekLogs.length : 0;
  const buckets = new Map<string, number>();
  for (const log of weekLogs) {
    const name = bucket(new Date(log.startedAt).getHours());
    buckets.set(name, (buckets.get(name) ?? 0) + log.actual);
  }
  const best = [...buckets.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
  const byKind = ["Lesson", "Drills", "Listening", "Output"].map((kind) => ({
    kind,
    hours: weekLogs.filter((log) => log.kind === kind).reduce((sum, log) => sum + log.actual, 0) / 3600,
  }));
  const maxHours = Math.max(0.1, ...byKind.map((item) => item.hours));
  const benchmark = benchmarks.find((item) => item.week === weekPick);
  const misses = topErrors(attempts);
  const lastWrong = [...attempts].reverse().filter((attempt) => !attempt.correct).slice(0, 6);
  const recent = reviews.slice(-40);
  const retention = recent.length ? recent.filter((mark) => mark.rating !== "again").length / recent.length : null;
  const doneLessons = Object.values(progress).filter((item) => item.done).length;
  const todayDone = (doneBlocks[todayISO()] ?? []).length;

  return (
    <Page>
      <div>
        <Eyebrow>Week {week}</Eyebrow>
        <h1 className="mt-1 font-display text-4xl">Progress</h1>
        <p className="mt-2 text-muted">Ten weeks is a study plan, not a promise of an exam result.</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Mini label="Focused" value={`${hours.toFixed(1)}h`} />
        <Mini label="Lessons" value={`${doneLessons}/21`} />
        <Mini label="Today" value={`${todayDone}`} />
      </div>
      <Panel>
        <Eyebrow>This study week</Eyebrow>
        <p className="mt-2">
          Completion {weekLogs.length ? `${Math.round(completion * 100)}%` : "—"} · Best time {best}
          {retention != null ? ` · Recall ${Math.round(retention * 100)}%` : ""}
        </p>
        <ul className="mt-4 grid gap-3">
          {byKind.map((item) => (
            <li key={item.kind}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{item.kind}</span>
                <span className="text-muted">{item.hours.toFixed(1)}h</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-paper-2">
                <div className="h-full rounded-full bg-spruce-fill" style={{ width: `${(item.hours / maxHours) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
        {!weekLogs.length && <p className="mt-3 text-sm text-muted">Finish a block and this week will fill in.</p>}
      </Panel>
      <Panel>
        <Eyebrow>Benchmarks</Eyebrow>
        <label className="mt-3 block text-sm font-semibold">
          Week
          <select
            className="mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3"
            value={weekPick}
            onChange={(event) => setWeekPick(Number(event.target.value))}
          >
            {benchmarks.map((item) => (
              <option key={item.week} value={item.week}>
                Week {item.week}
              </option>
            ))}
          </select>
        </label>
        {benchmark && (
          <div className="mt-3 grid gap-3">
            {weekPick > 3 && (
              <p className="text-sm text-muted">This build teaches Units 1 to 3. Keep the benchmark and log it when you can attempt it.</p>
            )}
            <label className="text-sm font-semibold">
              Target
              <textarea
                className="mt-1 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2 font-normal"
                value={benchmark.target}
                onChange={(event) => setBenchmark(benchmark.week, { target: event.target.value })}
              />
            </label>
            <label className="text-sm font-semibold">
              What happened
              <textarea
                className="mt-1 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2 font-normal"
                value={benchmark.result}
                onChange={(event) => setBenchmark(benchmark.week, { result: event.target.value })}
                placeholder="A sentence is enough."
              />
            </label>
            <label className="text-sm font-semibold">
              Score, optional
              <input
                type="number"
                min={0}
                max={100}
                className="mt-1 min-h-12 w-full rounded-xl border border-line bg-paper px-3"
                value={benchmark.score ?? ""}
                onChange={(event) =>
                  setBenchmark(benchmark.week, { score: event.target.value === "" ? null : Number(event.target.value) })
                }
              />
            </label>
            <div className="flex gap-2">
              <Button onClick={() => setBenchmark(benchmark.week, { status: "pass" })}>Pass</Button>
              <Button variant="soft" onClick={() => setBenchmark(benchmark.week, { status: "fail" })}>
                Not yet
              </Button>
            </div>
            <p className={cn("text-sm", benchmark.status === "pass" ? "text-spruce" : "text-muted")}>
              Status: {benchmark.status === "pending" ? "not logged" : benchmark.status === "pass" ? "passed" : "not yet"}
            </p>
          </div>
        )}
      </Panel>
      <Panel>
        <Eyebrow>Error bank</Eyebrow>
        {misses.length ? (
          <ul className="mt-3 grid gap-2">
            {misses.map((item) => (
              <li key={item.error} className="flex items-center justify-between">
                <span>{ERROR_LABEL[item.error as keyof typeof ERROR_LABEL] ?? item.error}</span>
                <span className="text-sm text-muted">{item.count}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-muted">Misses will collect here once you check a few answers.</p>
        )}
        <ul className="mt-3 grid gap-2">
          {lastWrong.map((attempt) => {
            const found = findQuestion(attempt.questionId);
            return (
              <li key={attempt.id} className="text-sm">
                <span className="font-semibold">{found?.question.prompt ?? "Drill item"}</span>
                <span className="text-muted"> · you wrote {attempt.answer || "—"}</span>
              </li>
            );
          })}
        </ul>
        <Button
          className="mt-4"
          variant="soft"
          onClick={() => {
            const lessonId = Object.keys(progress)[0] ?? "u1l1";
            primeAudio();
            startBlock({ index: -1, kind: "Drills", lessonId });
          }}
        >
          Drill the weak spots
        </Button>
      </Panel>
      <p className="text-sm text-muted">{cards.length} cards in the deck. Vocabulary counts grow as you meet words in lessons.</p>
    </Page>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-card px-3 py-3">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">{label}</p>
      <p className="mt-1 font-display text-2xl">{value}</p>
    </div>
  );
}
