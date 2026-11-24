import type { Article, Vocab } from "@/lib/lern/types";

function esc(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

export function cardsToCsv(rows: { german: string; english: string; article?: string; plural?: string; example: string }[]): string {
  const lines = ["german,english,article,plural,example"];
  for (const row of rows) {
    lines.push(
      [row.german, row.english, row.article ?? "", row.plural ?? "", row.example].map(esc).join(","),
    );
  }
  return lines.join("\n");
}

function parseLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function articleOf(value: string): Article | undefined {
  const v = value.trim().toLowerCase();
  if (v === "der" || v === "die" || v === "das") return v;
  return undefined;
}

export function csvToVocab(text: string): Vocab[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (!lines.length) return [];
  const start = lines[0]!.toLowerCase().includes("german") ? 1 : 0;
  const items: Vocab[] = [];
  for (const line of lines.slice(start)) {
    const cols = parseLine(line);
    const german = cols[0] ?? "";
    const english = cols[1] ?? "";
    if (!german || !english) continue;
    items.push({
      german,
      english,
      article: articleOf(cols[2] ?? ""),
      plural: cols[3] || undefined,
      example: cols[4] || german,
    });
  }
  return items;
}
