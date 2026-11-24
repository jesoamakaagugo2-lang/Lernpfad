import { useState } from "react";
import { cardsToCsv } from "@/lib/lern/csv";
import { todayISO } from "@/lib/lern/dates";
import { useStudy } from "@/lib/lern/store";
import type { Profile } from "@/lib/lern/types";
import { Button, Eyebrow, Field, Page, Panel } from "@/components/lernpfad/ui";
import { cn } from "@/lib/cn";

export function Settings() {
  const profile = useStudy((s) => s.profile);
  const updateProfile = useStudy((s) => s.updateProfile);
  const cards = useStudy((s) => s.cards);
  const resetAll = useStudy((s) => s.resetAll);
  const [arm, setArm] = useState(false);
  if (!profile) return null;

  function set<K extends keyof Profile>(key: K, value: Profile[K]) {
    updateProfile({ [key]: value });
  }

  return (
    <Page>
      <div>
        <Eyebrow>On this device</Eyebrow>
        <h1 className="mt-1 font-display text-4xl">Settings</h1>
        <p className="mt-2 text-muted">Lessons, cards and logs stay in this browser. Nothing is uploaded.</p>
      </div>
      <Panel>
        <label className="text-sm font-semibold">
          Name
          <Field className="mt-1" value={profile.name} onChange={(event) => set("name", event.target.value)} />
        </label>
        <div className="mt-4">
          <p className="text-sm font-semibold">Track</p>
          <div className="mt-2 flex rounded-full bg-paper-2 p-1">
            {(
              [
                ["intensive", "Intensive"],
                ["standard", "Standard"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={cn("min-h-11 flex-1 rounded-full text-sm font-semibold", profile.track === value ? "bg-card" : "text-muted")}
                onClick={() => set("track", value)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-muted">
            {profile.track === "intensive" ? "About 5 hours, 10 blocks a day, 10 weeks." : "About 2 hours, 4 blocks a day, 24 weeks."}
          </p>
        </div>
        <label className="mt-4 block text-sm font-semibold">
          Start date
          <Field className="mt-1" type="date" value={profile.startDate} onChange={(event) => set("startDate", event.target.value)} />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          Exam date, optional
          <Field
            className="mt-1"
            type="date"
            value={profile.examDate ?? ""}
            onChange={(event) => set("examDate", event.target.value || null)}
          />
        </label>
      </Panel>
      <Panel>
        <p className="text-sm font-semibold">Focus length</p>
        <Choice
          value={String(profile.focusMin)}
          options={["25", "30", "45"]}
          suffix=" min"
          onChange={(value) => set("focusMin", Number(value))}
        />
        <p className="mt-4 text-sm font-semibold">Short break</p>
        <Choice value={String(profile.shortBreak)} options={["5", "10"]} suffix=" min" onChange={(value) => set("shortBreak", Number(value))} />
        <p className="mt-4 text-sm font-semibold">Long break</p>
        <Choice
          value={String(profile.longBreak)}
          options={["20", "25", "30"]}
          suffix=" min"
          onChange={(value) => set("longBreak", Number(value))}
        />
      </Panel>
      <Panel>
        <p className="text-sm font-semibold">Appearance</p>
        <div className="mt-2 flex rounded-full bg-paper-2 p-1">
          {(["light", "dark"] as const).map((theme) => (
            <button
              key={theme}
              type="button"
              className={cn("min-h-11 flex-1 rounded-full text-sm font-semibold capitalize", profile.theme === theme ? "bg-card" : "text-muted")}
              onClick={() => set("theme", theme)}
            >
              {theme}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold">Text size</p>
        <Choice
          value={profile.text}
          options={[
            ["sm", "Small"],
            ["md", "Medium"],
            ["lg", "Large"],
          ]}
          onChange={(value) => set("text", value)}
        />
        <label className="mt-4 flex min-h-12 items-center gap-3 text-sm font-semibold">
          <input type="checkbox" checked={profile.vibrate} onChange={(event) => set("vibrate", event.target.checked)} />
          Vibrate when a block ends
        </label>
      </Panel>
      <Panel>
        <Eyebrow>Deck limits</Eyebrow>
        <label className="mt-3 block text-sm font-semibold">
          New cards a day
          <Field className="mt-1" type="number" min={1} max={100} value={profile.newLimit} onChange={(event) => set("newLimit", Number(event.target.value) || 1)} />
        </label>
        <label className="mt-3 block text-sm font-semibold">
          Reviews a day
          <Field
            className="mt-1"
            type="number"
            min={1}
            max={500}
            value={profile.reviewLimit}
            onChange={(event) => set("reviewLimit", Number(event.target.value) || 1)}
          />
        </label>
        <Button
          className="mt-4"
          variant="soft"
          onClick={() => {
            const blob = new Blob([cardsToCsv(cards)], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `lernpfad-cards-${todayISO()}.csv`;
            link.click();
            URL.revokeObjectURL(url);
          }}
        >
          Export cards
        </Button>
      </Panel>
      <Panel>
        <h2 className="font-display text-2xl">Reset this device</h2>
        <p className="mt-2 text-sm text-muted">Clears your profile, cards, logs and benchmarks from this browser.</p>
        {arm ? (
          <div className="mt-3 flex gap-2">
            <Button variant="danger" onClick={resetAll}>
              Delete everything
            </Button>
            <Button variant="ghost" onClick={() => setArm(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button className="mt-3" variant="soft" onClick={() => setArm(true)}>
            Reset
          </Button>
        )}
      </Panel>
    </Page>
  );
}

function Choice<T extends string>({
  value,
  options,
  onChange,
  suffix = "",
}: {
  value: T;
  options: T[] | { 0: string; 1: string }[] | [string, string][];
  onChange: (value: T) => void;
  suffix?: string;
}) {
  const items = (options as (T | [string, string])[]).map((option) =>
    Array.isArray(option) ? { value: option[0] as T, label: option[1] } : { value: option, label: `${option}${suffix}` },
  );
  return (
    <div className="mt-2 flex rounded-full bg-paper-2 p-1">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className={cn("min-h-11 flex-1 rounded-full text-sm font-semibold", value === item.value ? "bg-card" : "text-muted")}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
