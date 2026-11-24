import type { Benchmark } from "@/lib/lern/types";

export const BENCHMARK_TARGETS: { week: number; target: string }[] = [
  { week: 1, target: "Give a short self-introduction and recognise about 200 words." },
  { week: 2, target: "Score 70% or better on an A1-style check." },
  { week: 3, target: "Know about 500 words and score 85% on an A1-style check." },
  { week: 4, target: "Speak for three minutes on a familiar topic." },
  { week: 5, target: "Write a 100-word email." },
  { week: 6, target: "Score 70% on an A2-style check and know about 1,200 words." },
  { week: 7, target: "Write a 120-word text." },
  { week: 8, target: "Give a five-minute talk and answer two questions." },
  { week: 9, target: "Score 60% on a B1-style check." },
  {
    week: 10,
    target: "Score 70% on a B1-style check across reading, listening, writing and speaking.",
  },
];

export function freshBenchmarks(): Benchmark[] {
  return BENCHMARK_TARGETS.map((b) => ({
    ...b,
    result: "",
    status: "pending",
    score: null,
  }));
}
