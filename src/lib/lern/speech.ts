let ctx: AudioContext | null = null;

export function primeAudio() {
  if (typeof window === "undefined") return;
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return;
  if (!ctx) ctx = new AC();
  void ctx.resume();
}

export function chime() {
  if (!ctx) return;
  const notes = [523.25, 659.25, 783.99];
  notes.forEach((freq, i) => {
    const osc = ctx!.createOscillator();
    const gain = ctx!.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const start = ctx!.currentTime + i * 0.16;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.07, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.38);
    osc.connect(gain).connect(ctx!.destination);
    osc.start(start);
    osc.stop(start + 0.4);
  });
}

export function buzz(enabled: boolean) {
  if (!enabled || typeof navigator === "undefined" || !navigator.vibrate) return;
  navigator.vibrate([80, 40, 120]);
}

function germanVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !window.speechSynthesis) return undefined;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.toLowerCase().startsWith("de"));
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stopSpeak() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

export function speakGerman(text: string, rate = 0.92) {
  if (!canSpeak()) return false;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  utter.rate = rate;
  const voice = germanVoice();
  if (voice) utter.voice = voice;
  window.speechSynthesis.speak(utter);
  return true;
}

export function speakLines(lines: string[], rate = 0.92) {
  if (!canSpeak() || lines.length === 0) return false;
  window.speechSynthesis.cancel();
  const play = (i: number) => {
    if (i >= lines.length) return;
    const utter = new SpeechSynthesisUtterance(lines[i] ?? "");
    utter.lang = "de-DE";
    utter.rate = rate;
    const voice = germanVoice();
    if (voice) utter.voice = voice;
    utter.onend = () => play(i + 1);
    window.speechSynthesis.speak(utter);
  };
  play(0);
  return true;
}
