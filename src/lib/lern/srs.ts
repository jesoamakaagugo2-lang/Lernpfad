import type { Card, Rating } from "@/lib/lern/types";

export function schedule(card: Card, rating: Rating, now = Date.now()): Card {
  let ease = card.ease || 2.5;
  let interval = card.interval;
  let reps = card.reps;
  let lapses = card.lapses;
  if (rating === "again") {
    return {
      ...card,
      reps: 0,
      interval: 0,
      lapses: lapses + 1,
      ease: Math.max(1.3, ease - 0.2),
      due: now + 10 * 60 * 1000,
    };
  }
  const q = rating === "hard" ? 3 : rating === "good" ? 4 : 5;
  if (reps === 0) interval = rating === "easy" ? 3 : 1;
  else if (reps === 1) interval = rating === "easy" ? 7 : rating === "hard" ? 3 : 6;
  else {
    const factor = rating === "hard" ? 1.2 : rating === "easy" ? ease * 1.3 : ease;
    interval = Math.max(1, Math.round(interval * factor));
  }
  reps += 1;
  ease = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  ease = Math.min(2.8, Math.max(1.3, ease));
  return { ...card, ease, interval, reps, lapses, due: now + interval * 86400000 };
}

export function intervalLabel(card: Card, rating: Rating): string {
  if (rating === "again") return "10m";
  const next = schedule(card, rating);
  return next.interval <= 1 ? "1d" : `${next.interval}d`;
}

export function cardKey(card: { article?: string; german: string }): string {
  return `${card.article ?? ""}|${card.german.trim().toLowerCase()}`;
}
