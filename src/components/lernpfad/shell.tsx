import { BookOpen, CalendarDays, ChartNoAxesColumn, Layers, Settings } from "lucide-react";
import { Cards } from "@/components/lernpfad/cards";
import { LessonRoute, Lessons } from "@/components/lernpfad/lessons";
import { Progress } from "@/components/lernpfad/progress";
import { Settings as SettingsView } from "@/components/lernpfad/settings";
import { Today } from "@/components/lernpfad/today";
import { useStudy } from "@/lib/lern/store";
import type { View } from "@/lib/lern/types";
import { cn } from "@/lib/cn";

const NAV: { id: View; label: string; icon: typeof BookOpen }[] = [
  { id: "today", label: "Today", icon: CalendarDays },
  { id: "lessons", label: "Lessons", icon: BookOpen },
  { id: "cards", label: "Cards", icon: Layers },
  { id: "progress", label: "Progress", icon: ChartNoAxesColumn },
];

export function Shell() {
  const view = useStudy((s) => s.view);
  const setView = useStudy((s) => s.setView);

  return (
    <div className="min-h-dvh bg-paper text-ink md:flex">
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-line bg-card px-4 py-6 md:flex">
        <div className="flex items-center gap-3 px-2">
          <span className="grid size-10 place-items-center rounded-xl bg-spruce-fill font-display text-lg text-spruce-ink">L</span>
          <span>
            <span className="block font-display text-xl leading-none">Lernpfad</span>
            <span className="text-xs text-muted">A1 toward B1</span>
          </span>
        </div>
        <nav className="mt-8 grid gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <NavButton key={item.id} item={item} active={view === item.id || (item.id === "lessons" && view === "lesson")} onClick={() => setView(item.id)} />
          ))}
          <NavButton
            item={{ id: "settings", label: "Settings", icon: Settings }}
            active={view === "settings"}
            onClick={() => setView("settings")}
          />
        </nav>
        <p className="mt-auto px-2 text-sm text-muted">Units 1–3 are ready. The rest of the path is still being written.</p>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="mx-auto flex w-full max-w-3xl justify-end px-4 pt-4 md:hidden">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-paper-2"
            aria-label="Settings"
            onClick={() => setView("settings")}
          >
            <Settings size={18} />
          </button>
        </header>
        {view === "today" && <Today />}
        {view === "lessons" && <Lessons />}
        {view === "lesson" && <LessonRoute />}
        {view === "cards" && <Cards />}
        {view === "progress" && <Progress />}
        {view === "settings" && <SettingsView />}
        <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-line bg-card md:hidden" aria-label="Primary">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id || (item.id === "lessons" && view === "lesson");
            return (
              <button
                key={item.id}
                type="button"
                className={cn("flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold", active ? "text-spruce" : "text-muted")}
                aria-current={active ? "page" : undefined}
                onClick={() => setView(item.id)}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function NavButton({
  item,
  active,
  onClick,
}: {
  item: { id: View; label: string; icon: typeof BookOpen };
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center gap-3 rounded-xl px-3 text-left font-semibold",
        active ? "bg-paper-2 text-ink" : "text-muted",
      )}
    >
      <Icon size={18} />
      {item.label}
    </button>
  );
}
