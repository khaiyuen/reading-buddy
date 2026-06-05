"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSpeech } from "@/components/useSpeech";
import { useProgress } from "@/components/useProgress";
import type { Series, Book } from "@/content/types";
import allDistractors from "@/content/distractors";

type Phase = "intro" | "question" | "revealed" | "finish";
type Mode = "choice" | "open";

const SERIES_EMOJI: Record<string, string> = {
  "secret-explorers": "🔭",
  "magic-tree-house": "🌳",
  "a-to-z-mysteries": "🔍",
  "dragon-masters": "🐉",
};

/** Build 3 shuffled choices using authored distractors for this book/question */
function buildChoices(book: Book, qIndex: number): { text: string; correct: boolean }[] {
  const correct = book.questions[qIndex].a;
  const bookDistractors = allDistractors[book.id];
  let wrongs: string[];

  if (bookDistractors?.[qIndex]) {
    // Use the two authored plausible-but-wrong answers
    wrongs = [...bookDistractors[qIndex]];
  } else {
    // Fallback: other answers from the same book (shouldn't reach here once all distractors are authored)
    wrongs = book.questions
      .filter((_, i) => i !== qIndex)
      .map((q) => q.a)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
  }

  return [{ text: correct, correct: true }, ...wrongs.map((t) => ({ text: t, correct: false }))]
    .sort(() => Math.random() - 0.5);
}

export default function QuizClient({ series, book }: { series: Series; book: Book }) {
  const [mode, setMode] = useState<Mode>("choice");
  const [phase, setPhase] = useState<Phase>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [choices, setChoices] = useState<{ text: string; correct: boolean }[]>([]);
  const [picked, setPicked] = useState<number | null>(null); // index into choices[]

  const { speak, stop } = useSpeech();
  const { progress, mark, gotItCount } = useProgress(book.id);

  const total = book.questions.length;
  const current = book.questions[qIndex];
  const emoji = SERIES_EMOJI[series.id] ?? "📖";

  // ── auto-speak listenFor on mount (iOS may silently skip — tap card as fallback)
  useEffect(() => { speak(book.listenFor); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── rebuild choices whenever question index changes (choice mode only)
  useEffect(() => {
    if (mode === "choice") setChoices(buildChoices(book, qIndex));
    setPicked(null);
  }, [qIndex, mode, book]);

  // ── read choices aloud after question is spoken (small delay so they don't overlap)
  const speakQuestionAndChoices = useCallback((qi: number, ch: { text: string }[]) => {
    speak(book.questions[qi].q);
    const delay = (book.questions[qi].q.length / 14 + 1) * 1000; // rough duration estimate
    setTimeout(() => {
      speak(
        "Is it… " +
          ch.map((c, i) => `Choice ${i + 1}: ${c.text}`).join("… or… ")
      );
    }, delay);
  }, [book, speak]);

  // ── START
  const handleStart = useCallback(() => {
    const ch = buildChoices(book, 0);
    setChoices(ch);
    setPicked(null);
    setQIndex(0);
    setPhase("question");
    if (mode === "choice") {
      speakQuestionAndChoices(0, ch);
    } else {
      speak(book.questions[0].q);
    }
  }, [book, speak, mode, speakQuestionAndChoices]);

  // ── CHOICE TAP
  const handlePick = useCallback((idx: number) => {
    if (picked !== null) return; // already answered
    setPicked(idx);
    const wasCorrect = choices[idx].correct;
    if (wasCorrect) {
      mark(qIndex, "got-it");
      speak("Yes! " + choices[idx].text);
    } else {
      mark(qIndex, "tricky");
      const correctText = choices.find((c) => c.correct)!.text;
      speak("Good try! The answer is… " + correctText);
    }
    setPhase("revealed");
  }, [picked, choices, qIndex, mark, speak]);

  // ── OPEN MODE: show answer
  const handleShowAnswer = useCallback(() => {
    speak(current.a);
    setPhase("revealed");
  }, [current, speak]);

  // ── ADVANCE
  const advance = useCallback((result?: "got-it" | "tricky") => {
    if (result) mark(qIndex, result);
    stop();
    const next = qIndex + 1;
    if (next >= total) {
      speak("Amazing! You finished " + book.title + "! You did a great job!");
      setPhase("finish");
    } else {
      const ch = buildChoices(book, next);
      setChoices(ch);
      setPicked(null);
      setQIndex(next);
      setPhase("question");
      if (mode === "choice") {
        speakQuestionAndChoices(next, ch);
      } else {
        speak(book.questions[next].q);
      }
    }
  }, [qIndex, total, book, speak, stop, mark, mode, speakQuestionAndChoices]);

  const handlePlayAgain = useCallback(() => {
    stop();
    setPhase("intro");
    setQIndex(0);
    setPicked(null);
  }, [stop]);

  // choice button appearance
  const choiceStyle = (idx: number) => {
    if (picked === null) return { bg: book.color + "22", border: book.color + "66", text: "#333" };
    if (choices[idx].correct) return { bg: "#e8f5e9", border: "#2e7d32", text: "#1b5e20" };
    if (idx === picked) return { bg: "#fff3e0", border: "#e65100", text: "#bf360c" };
    return { bg: "#f5f5f5", border: "#ccc", text: "#999" };
  };

  return (
    <main className="min-h-screen flex flex-col p-5" style={{ backgroundColor: book.color + "18" }}>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-4">
        <Link
          href={`/${series.id}`}
          className="text-2xl py-2 px-3 rounded-2xl font-bold"
          style={{ color: book.color }}
          onClick={() => stop()}
        >←</Link>
        <div>
          <div className="text-xs font-semibold opacity-60 uppercase tracking-wide">Book {book.number}</div>
          <div className="text-base font-bold leading-tight" style={{ color: book.color }}>{book.title}</div>
        </div>
      </div>

      {/* ── Progress dots ── */}
      {phase !== "intro" && phase !== "finish" && (
        <div className="flex gap-2 justify-center mb-5">
          {book.questions.map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 transition-all"
              style={{
                backgroundColor: progress[i] === "got-it" ? book.color : i === qIndex ? book.color + "88" : "transparent",
                borderColor: book.color,
                opacity: i > qIndex && !progress[i] ? 0.35 : 1,
              }}
            />
          ))}
        </div>
      )}

      {/* ════════════════════════════════════════
          INTRO
      ════════════════════════════════════════ */}
      {phase === "intro" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-7 text-center">
          <div className="text-7xl">{emoji}</div>
          <div>
            <h1 className="text-3xl font-bold mb-1" style={{ color: book.color }}>{book.title}</h1>
            {book.dragon && <p className="text-lg text-gray-500">{book.dragon}</p>}
          </div>

          {/* listenFor — tappable for iOS fallback */}
          <button
            onClick={() => speak(book.listenFor)}
            className="rounded-2xl px-6 py-4 max-w-xs text-center active:scale-95 transition-transform"
            style={{ backgroundColor: book.color + "22" }}
          >
            <p className="text-xl text-gray-700 leading-relaxed italic">"{book.listenFor}"</p>
            <p className="text-sm mt-2 font-semibold" style={{ color: book.color }}>🔊 Tap to hear again</p>
          </button>

          {/* Mode picker */}
          <div className="w-full max-w-xs">
            <p className="text-sm text-gray-500 mb-3 font-semibold">How do you want to play?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setMode("choice")}
                className="flex-1 rounded-2xl py-4 px-3 text-center font-bold text-base transition-all active:scale-95 border-2"
                style={{
                  backgroundColor: mode === "choice" ? book.color : "transparent",
                  borderColor: book.color,
                  color: mode === "choice" ? "white" : book.color,
                }}
              >
                👆 Tap the<br />answer
              </button>
              <button
                onClick={() => setMode("open")}
                className="flex-1 rounded-2xl py-4 px-3 text-center font-bold text-base transition-all active:scale-95 border-2"
                style={{
                  backgroundColor: mode === "open" ? book.color : "transparent",
                  borderColor: book.color,
                  color: mode === "open" ? "white" : book.color,
                }}
              >
                🗣️ Say the<br />answer
              </button>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="text-2xl font-bold text-white rounded-3xl px-10 py-6 shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: book.color }}
          >▶ Start!</button>

          <p className="text-sm text-gray-500">{total} questions</p>
        </div>
      )}

      {/* ════════════════════════════════════════
          QUESTION (both modes share this header)
      ════════════════════════════════════════ */}
      {(phase === "question" || phase === "revealed") && (
        <div className="flex-1 flex flex-col gap-4 pt-2">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wide text-center">
            Question {qIndex + 1} of {total}
          </div>

          {/* Question card */}
          <div className="rounded-3xl p-5 text-center shadow-md" style={{ backgroundColor: book.color + "22" }}>
            <p className="text-2xl font-bold leading-snug" style={{ color: book.color }}>{current.q}</p>
          </div>

          {/* 🔊 repeat question */}
          <button
            onClick={() => mode === "choice" ? speakQuestionAndChoices(qIndex, choices) : speak(current.q)}
            className="self-center flex items-center gap-2 text-base font-semibold text-white rounded-2xl px-6 py-3 shadow active:scale-95 transition-transform"
            style={{ backgroundColor: book.color + "99" }}
          >🔊 Hear it again</button>

          {/* ── CHOICE MODE ── */}
          {mode === "choice" && (
            <div className="flex flex-col gap-3 mt-1">
              {choices.map((choice, idx) => {
                const s = choiceStyle(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => handlePick(idx)}
                    disabled={picked !== null}
                    className="w-full rounded-2xl p-4 text-left font-semibold text-base leading-snug shadow-sm active:scale-95 transition-all border-2"
                    style={{ backgroundColor: s.bg, borderColor: s.border, color: s.text }}
                  >
                    <span className="font-bold mr-2" style={{ color: s.border }}>
                      {idx + 1}.
                    </span>
                    {choice.text}
                    {picked !== null && choice.correct && (
                      <span className="ml-2">✅</span>
                    )}
                    {picked === idx && !choice.correct && (
                      <span className="ml-2">💛</span>
                    )}
                  </button>
                );
              })}

              {/* Next button appears after answering */}
              {phase === "revealed" && (
                <button
                  onClick={() => advance()}
                  className="w-full text-xl font-bold text-white rounded-3xl py-5 mt-2 shadow-lg active:scale-95 transition-transform"
                  style={{ backgroundColor: book.color }}
                >
                  {qIndex + 1 < total ? "Next question →" : "Finish! 🎉"}
                </button>
              )}
            </div>
          )}

          {/* ── OPEN MODE ── */}
          {mode === "open" && phase === "question" && (
            <>
              <div className="flex-1" />
              <button
                onClick={handleShowAnswer}
                className="w-full text-2xl font-bold text-white rounded-3xl py-6 shadow-lg active:scale-95 transition-transform"
                style={{ backgroundColor: book.color }}
              >Show me the answer →</button>
            </>
          )}

          {mode === "open" && phase === "revealed" && (
            <>
              {/* Answer card */}
              <div className="rounded-3xl p-5 text-center shadow-md" style={{ backgroundColor: book.color + "33" }}>
                <p className="text-xl font-bold leading-relaxed text-gray-800">{current.a}</p>
              </div>
              <button
                onClick={() => speak(current.a)}
                className="self-center flex items-center gap-2 text-base font-semibold text-white rounded-2xl px-6 py-3 shadow active:scale-95"
                style={{ backgroundColor: book.color + "99" }}
              >🔊 Hear the answer again</button>
              <div className="flex-1" />
              <div className="flex gap-3">
                <button onClick={() => advance("got-it")} className="flex-1 text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95" style={{ backgroundColor: "#2e7d32" }}>
                  Got it ⭐
                </button>
                <button onClick={() => advance("tricky")} className="flex-1 text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95" style={{ backgroundColor: "#e65100" }}>
                  Tricky one
                </button>
              </div>
              <button onClick={() => advance()} className="w-full text-lg font-semibold text-gray-500 py-3 active:opacity-70">
                Next ➜
              </button>
            </>
          )}
        </div>
      )}

      {/* ════════════════════════════════════════
          FINISH
      ════════════════════════════════════════ */}
      {phase === "finish" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-7xl">🎉</div>
          <h2 className="text-3xl font-bold" style={{ color: book.color }}>You finished it!</h2>
          <p className="text-xl text-gray-700 font-semibold">{book.title}</p>

          <div className="flex gap-2 justify-center text-3xl">
            {book.questions.map((_, i) => (
              <span key={i}>{progress[i] === "got-it" ? "⭐" : "○"}</span>
            ))}
          </div>

          <p className="text-lg text-gray-600">
            {gotItCount} out of {total} — amazing work! {emoji}
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handlePlayAgain}
              className="w-full text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95"
              style={{ backgroundColor: book.color }}
            >Play again</button>
            <Link
              href={`/${series.id}`}
              className="block w-full text-xl font-bold text-center rounded-3xl py-5 shadow-lg active:scale-95"
              style={{ border: `3px solid ${book.color}`, color: book.color }}
              onClick={() => stop()}
            >Pick another book</Link>
          </div>
        </div>
      )}
    </main>
  );
}
