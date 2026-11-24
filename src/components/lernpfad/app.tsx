import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Focus } from "@/components/lernpfad/focus";
import { Onboarding } from "@/components/lernpfad/onboarding";
import { Shell } from "@/components/lernpfad/shell";
import { TimerEngine } from "@/components/lernpfad/engine";
import { useStudy } from "@/lib/lern/store";

function useHydrated() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void Promise.resolve(useStudy.persist.rehydrate()).finally(() => {
      const profile = useStudy.getState().profile;
      document.documentElement.classList.toggle("dark", profile?.theme === "dark");
      document.documentElement.dataset.text = profile?.text ?? "md";
      const timer = useStudy.getState().timer;
      if (timer && (timer.running || timer.phase === "rate" || timer.phase === "break")) {
        useStudy.setState({ view: "focus" });
      }
      setReady(true);
    });
  }, []);
  return ready;
}

function ThemeSync() {
  const theme = useStudy((s) => s.profile?.theme ?? "light");
  const text = useStudy((s) => s.profile?.text ?? "md");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.text = text;
  }, [theme, text]);
  return null;
}

export function App() {
  const ready = useHydrated();
  const profile = useStudy((s) => s.profile);
  const view = useStudy((s) => s.view);
  if (!ready) {
    return (
      <main className="grid min-h-dvh place-items-center bg-paper text-ink">
        <div className="text-center">
          <p className="font-display text-4xl">Lernpfad</p>
          <p className="mt-2 text-sm text-muted">Opening your study space</p>
        </div>
      </main>
    );
  }
  return (
    <>
      <ThemeSync />
      <TimerEngine />
      <Toaster position="top-center" />
      {profile ? view === "focus" ? <Focus /> : <Shell /> : <Onboarding />}
    </>
  );
}
