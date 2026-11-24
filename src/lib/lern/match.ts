export function normalizeGerman(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[.,!?;:„“”"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchesAnswer(
  input: string,
  answer: string,
  aliases: string[] = [],
): { ok: boolean; hint: boolean } {
  const targets = [answer, ...aliases];
  const raw = input.trim().toLowerCase().replace(/\s+/g, " ");
  if (!raw) return { ok: false, hint: false };
  for (const t of targets) {
    if (raw === t.trim().toLowerCase().replace(/\s+/g, " ")) return { ok: true, hint: false };
  }
  const folded = normalizeGerman(input);
  for (const t of targets) {
    if (folded && folded === normalizeGerman(t)) return { ok: true, hint: true };
  }
  return { ok: false, hint: false };
}

export function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    const j = (h >>> 0) % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j]!;
    arr[j] = tmp!;
  }
  return arr;
}
