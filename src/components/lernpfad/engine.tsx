import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { buzz, chime } from "@/lib/lern/speech";
import { useStudy } from "@/lib/lern/store";

export function useNow(ms = 250) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), ms);
    const onVis = () => setNow(Date.now());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ms]);
  return now;
}

export function TimerEngine() {
  const now = useNow();
  const timer = useStudy((s) => s.timer);
  const vibrate = useStudy((s) => s.profile?.vibrate ?? true);
  const seen = useRef<string | null>(null);

  useEffect(() => {
    if (!timer?.running || timer.endsAt == null || now < timer.endsAt) return;
    const key = `${timer.phase}:${timer.startedAt}:${timer.endsAt}`;
    if (seen.current === key) return;
    seen.current = key;
    if (timer.phase === "work") {
      chime();
      buzz(vibrate);
      useStudy.getState().endWork();
    } else if (timer.phase === "break") {
      chime();
      toast("Break finished. The next block is ready.");
      useStudy.getState().finishBreak();
    }
  }, [now, timer, vibrate]);

  return null;
}
