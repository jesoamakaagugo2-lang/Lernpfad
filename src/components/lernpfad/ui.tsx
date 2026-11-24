import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { Article } from "@/lib/lern/types";

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "soft" | "danger" }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-base font-semibold transition-opacity disabled:opacity-40",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce",
        variant === "primary" && "bg-spruce-fill text-spruce-ink hover:opacity-90",
        variant === "ghost" && "bg-transparent text-ink hover:bg-paper-2",
        variant === "soft" && "bg-paper-2 text-ink hover:bg-line",
        variant === "danger" && "bg-clay-soft text-ink",
        className,
      )}
      {...props}
    />
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("rounded-2xl border border-line bg-card p-4 md:p-5", className)}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold tracking-widest text-muted uppercase">{children}</p>;
}

export function Field({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-xl border border-line bg-card px-3 text-ink outline-none focus:border-spruce",
        className,
      )}
      {...props}
    />
  );
}

export function Area({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-line bg-card px-3 py-3 text-ink outline-none focus:border-spruce",
        className,
      )}
      {...props}
    />
  );
}

export function GermanWord({
  article,
  german,
  className,
}: {
  article?: Article;
  german: string;
  className?: string;
}) {
  const tone = article === "der" ? "text-der" : article === "die" ? "text-die" : article === "das" ? "text-das" : "";
  return (
    <span className={className}>
      {article ? <span className={cn("font-semibold", tone)}>{article} </span> : null}
      {german}
    </span>
  );
}

export function Ring({
  progress,
  tone = "spruce",
  className,
}: {
  progress: number;
  tone?: "spruce" | "clay";
  className?: string;
}) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, progress));
  return (
    <svg viewBox="0 0 120 120" className={cn("size-40", className)} aria-hidden="true">
      <circle cx="60" cy="60" r={r} className="fill-none stroke-line" strokeWidth="8" />
      <circle
        cx="60"
        cy="60"
        r={r}
        className={cn("timer-arc fill-none", tone === "clay" ? "stroke-clay" : "stroke-spruce")}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - p)}
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export function Meter({ value, label }: { value: number; label?: string }) {
  const v = Math.max(0, Math.min(1, value));
  return (
    <div
      className="h-2 overflow-hidden rounded-full bg-paper-2"
      role="progressbar"
      aria-valuenow={Math.round(v * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="h-full rounded-full bg-spruce-fill" style={{ width: `${v * 100}%` }} />
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 pb-28 md:px-8 md:pb-12">{children}</div>;
}
