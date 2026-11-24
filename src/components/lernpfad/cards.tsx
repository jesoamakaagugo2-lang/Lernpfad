import { useMemo, useState } from "react";
import { useEffect } from "react";
import { todayISO } from "@/lib/lern/dates";
import { csvToVocab, cardsToCsv } from "@/lib/lern/csv";
import { intervalLabel } from "@/lib/lern/srs";
import { useStudy } from "@/lib/lern/store";
import type { Article, Rating } from "@/lib/lern/types";
import { Button, Eyebrow, Field, GermanWord, Page, Panel } from "@/components/lernpfad/ui";

const RATINGS: Rating[] = ["again", "hard", "good", "easy"];

export function Cards() {
  const cards = useStudy((s) => s.cards);
  const profile = useStudy((s) => s.profile);
  const rateCard = useStudy((s) => s.rateCard);
  const addVocab = useStudy((s) => s.addVocab);
  const patchCard = useStudy((s) => s.patchCard);
  const reviewLimit = profile?.reviewLimit ?? 150;
  const newLimit = profile?.newLimit ?? 25;
  const queue = useMemo(() => {
    const now = Date.now();
    const due = cards.filter((card) => card.due <= now);
    const reviews = due.filter((card) => card.reps > 0).sort((a, b) => a.due - b.due).slice(0, reviewLimit);
    const fresh = due.filter((card) => card.reps === 0).slice(0, newLimit);
    return [...reviews, ...fresh];
  }, [cards, reviewLimit, newLimit]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [german, setGerman] = useState("");
  const [english, setEnglish] = useState("");
  const [article, setArticle] = useState<Article | "">("");
  const [plural, setPlural] = useState("");
  const [example, setExample] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  const card = queue[index];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (!revealed || !card) return;
      const map: Record<string, Rating> = { "1": "again", "2": "hard", "3": "good", "4": "easy" };
      const rating = map[event.key];
      if (!rating) return;
      rateCard(card.id, rating);
      setRevealed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, card, rateCard]);

  const dueCount = cards.filter((item) => item.due <= Date.now()).length;
  const mature = cards.filter((item) => item.interval >= 21).length;

  return (
    <Page>
      <div>
        <Eyebrow>Spaced repetition · SM-2</Eyebrow>
        <h1 className="mt-1 font-display text-4xl">Cards</h1>
        <p className="mt-2 text-muted">
          {dueCount} due · {cards.length} saved · {mature} mature
        </p>
      </div>
      {card ? (
        <Panel>
          <Eyebrow>
            {index + 1} of {queue.length}
            {card.reps === 0 ? " · new" : ""}
            {card.lapses >= 8 ? " · leech" : ""}
          </Eyebrow>
          <h2 className="mt-2 font-display text-4xl">
            <GermanWord article={card.article} german={card.german} />
          </h2>
          {revealed ? (
            <div className="mt-4">
              <p className="text-xl">{card.english}</p>
              {card.plural ? <p className="mt-1 text-sm text-muted">Plural: {card.plural}</p> : null}
              <p className="mt-2">{card.example}</p>
              {card.lapses >= 8 && (
                <form
                  className="mt-3 flex flex-col gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!mnemonic.trim()) return;
                    patchCard(card.id, { example: mnemonic.trim(), lapses: 0 });
                    setMnemonic("");
                  }}
                >
                  <p className="text-sm">This card has failed often. Give it a new example sentence.</p>
                  <Field value={mnemonic} onChange={(event) => setMnemonic(event.target.value)} placeholder="New example" aria-label="New example" />
                  <Button variant="soft" type="submit">
                    Save example
                  </Button>
                </form>
              )}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {RATINGS.map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className="min-h-14 rounded-xl bg-paper-2 text-sm font-semibold capitalize"
                    onClick={() => {
                      rateCard(card.id, rating);
                      setRevealed(false);
                      setIndex((n) => n + 1);
                    }}
                  >
                    {rating}
                    <span className="mt-0.5 block text-xs font-normal text-muted">{intervalLabel(card, rating)}</span>
                  </button>
                ))}
              </div>
              <p className="mt-2 hidden text-xs text-muted md:block">Keys 1–4</p>
            </div>
          ) : (
            <Button className="mt-4" onClick={() => setRevealed(true)}>
              Show meaning
            </Button>
          )}
        </Panel>
      ) : (
        <Panel>
          <h2 className="font-display text-3xl">You’re caught up.</h2>
          <p className="mt-2 text-muted">New words arrive when you open a lesson’s dialogue. You can also add your own.</p>
        </Panel>
      )}

      <Panel>
        <h2 className="font-display text-2xl">Add a card</h2>
        <form
          className="mt-3 grid gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            if (!german.trim() || !english.trim()) return;
            addVocab("manual", [
              {
                german: german.trim(),
                english: english.trim(),
                article: article || undefined,
                plural: plural.trim() || undefined,
                example: example.trim() || german.trim(),
              },
            ]);
            setGerman("");
            setEnglish("");
            setPlural("");
            setExample("");
            setArticle("");
          }}
        >
          <Field value={german} onChange={(event) => setGerman(event.target.value)} placeholder="German" aria-label="German" />
          <Field value={english} onChange={(event) => setEnglish(event.target.value)} placeholder="English" aria-label="English" />
          <div className="grid grid-cols-3 gap-2">
            {(["der", "die", "das"] as Article[]).map((item) => (
              <button
                key={item}
                type="button"
                className={`min-h-11 rounded-full border font-semibold ${article === item ? "border-spruce bg-spruce-soft" : "border-line"} ${item === "der" ? "text-der" : item === "die" ? "text-die" : "text-das"}`}
                onClick={() => setArticle((current) => (current === item ? "" : item))}
              >
                {item}
              </button>
            ))}
          </div>
          <Field value={plural} onChange={(event) => setPlural(event.target.value)} placeholder="Plural, optional" aria-label="Plural" />
          <Field value={example} onChange={(event) => setExample(event.target.value)} placeholder="Example sentence" aria-label="Example" />
          <Button type="submit">Add to deck</Button>
        </form>
      </Panel>

      <div className="flex flex-wrap gap-2">
        <Button
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
          Export CSV
        </Button>
        <label className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-paper-2 px-5 font-semibold">
          Import CSV
          <input
            type="file"
            accept=".csv,text/csv"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              void file.text().then((text) => addVocab("import", csvToVocab(text)));
              event.target.value = "";
            }}
          />
        </label>
      </div>
    </Page>
  );
}
