export function todayISO(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

export function daysBetween(from: string, to: string): number {
  const [ay, am, ad] = from.split("-").map(Number);
  const [by, bm, bd] = to.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

export function studyWeek(startDate: string, today = todayISO()): number {
  return Math.max(1, Math.floor(Math.max(0, daysBetween(startDate, today)) / 7) + 1);
}

export function weekBounds(startDate: string, week: number): { from: string; to: string } {
  const from = addDays(startDate, (week - 1) * 7);
  return { from, to: addDays(from, 6) };
}

export function inWeek(date: string, startDate: string, week: number): boolean {
  const { from, to } = weekBounds(startDate, week);
  return date >= from && date <= to;
}

export function longDate(d = new Date()): string {
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}

export function greeting(d = new Date()): string {
  const h = d.getHours();
  if (h < 11) return "Guten Morgen";
  if (h < 18) return "Guten Tag";
  return "Guten Abend";
}

export function fmt(total: number): string {
  const s = Math.max(0, Math.floor(total));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export function wordCount(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

export function streak(done: Record<string, number[]>, today = todayISO()): number {
  let cursor = done[today]?.length ? today : addDays(today, -1);
  let n = 0;
  while (done[cursor]?.length) {
    n += 1;
    cursor = addDays(cursor, -1);
  }
  return n;
}

export function bucket(hour: number): "Morning" | "Afternoon" | "Evening" {
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}
