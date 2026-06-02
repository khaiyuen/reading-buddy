"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useSpeech } from "@/components/useSpeech";
import { useProgress } from "@/components/useProgress";
import type { Series, Book } from "@/content/types";

type Phase = "intro" | "question" | "answer" | "finish";

export default function QuizClient({
  series,
  book,
}: {
  series: Series;
  book: Book;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [qIndex, setQIndex] = useState(0);
  const { speak, stop } = useSpeech();
  const { progress, mark, gotItCount } = useProgress(book.id);

  const total = book.questions.length;
  const current = book.questions[qIndex];

  const handleStart = useCallback(() => {
    // First speech MUST be triggered by user tap (iOS requirement)
    speak(book.listenFor + "  " + book.questions[0].q);
    setPhase("question");
    setQIndex(0);
  }, [book, speak]);

  const handleRepeat = useCallback(() => {
    speak(current.q);
  }, [current, speak]);

  const handleShowAnswer = useCallback(() => {
    speak(current.a);
    setPhase("answer");
  }, [current, speak]);

  const handleRepeatAnswer = useCallback(() => {
    speak(current.a);
  }, [current, speak]);

  const advance = useCallback(() => {
    stop();
    const next = qIndex + 1;
    if (next >= total) {
      speak("Amazing! You finished " + book.title + "! You did a great job!");
      setPhase("finish");
    } else {
      setQIndex(next);
      speak(book.questions[next].q);
      setPhase("question");
    }
  }, [qIndex, total, book, speak, stop]);

  const handleGotIt = useCallback(() => {
    mark(qIndex, "got-it");
    advance();
  }, [qIndex, mark, advance]);

  const handleTricky = useCallback(() => {
    mark(qIndex, "tricky");
    advance();
  }, [qIndex, mark, advance]);

  const handlePlayAgain = useCallback(() => {
    stop();
    setPhase("intro");
    setQIndex(0);
  }, [stop]);

  return (
    <main
      className="min-h-screen flex flex-col p-5"
      style={{ backgroundColor: book.color + "18" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Link
          href={`/${series.id}`}
          className="text-2xl py-2 px-3 rounded-2xl font-bold"
          style={{ color: book.color }}
          onClick={() => stop()}
        >
          ←
        </Link>
        <div>
          <div className="text-xs font-semibold opacity-60 uppercase tracking-wide">
            Book {book.number}
          </div>
          <div className="text-base font-bold leading-tight" style={{ color: book.color }}>
            {book.title}
          </div>
        </div>
      </div>

      {/* Progress dots */}
      {phase !== "intro" && phase !== "finish" && (
        <div className="flex gap-2 justify-center mb-6">
          {book.questions.map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 transition-all"
              style={{
                backgroundColor:
                  progress[i] === "got-it"
                    ? book.color
                    : i === qIndex
                    ? book.color + "88"
                    : "transparent",
                borderColor: book.color,
                opacity: i > qIndex && !progress[i] ? 0.4 : 1,
              }}
            />
          ))}
        </div>
      )}

      {/* INTRO PHASE */}
      {phase === "intro" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
          <div className="text-7xl">🐉</div>
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: book.color }}>
              {book.title}
            </h1>
            {book.dragon && (
              <p className="text-lg text-gray-600">{book.dragon}</p>
            )}
          </div>
          <p className="text-xl text-gray-700 max-w-xs leading-relaxed italic">
            "{book.listenFor}"
          </p>
          <button
            onClick={handleStart}
            className="text-2xl font-bold text-white rounded-3xl px-10 py-6 shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: book.color }}
          >
            ▶ Start!
          </button>
          <p className="text-sm text-gray-500">
            {total} questions · tap to hear each one
          </p>
        </div>
      )}

      {/* QUESTION PHASE */}
      {phase === "question" && (
        <div className="flex-1 flex flex-col items-center gap-6 pt-4">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
            Question {qIndex + 1} of {total}
          </div>

          <div
            className="w-full rounded-3xl p-6 text-center shadow-md"
            style={{ backgroundColor: book.color + "22" }}
          >
            <p
              className="text-2xl font-bold leading-snug"
              style={{ color: book.color }}
            >
              {current.q}
            </p>
          </div>

          <button
            onClick={handleRepeat}
            className="flex items-center gap-2 text-xl font-semibold text-white rounded-2xl px-8 py-4 shadow active:scale-95 transition-transform"
            style={{ backgroundColor: book.color + "bb" }}
          >
            🔊 Hear it again
          </button>

          <div className="flex-1" />

          <button
            onClick={handleShowAnswer}
            className="w-full text-2xl font-bold text-white rounded-3xl py-6 shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: book.color }}
          >
            Show me the answer →
          </button>
        </div>
      )}

      {/* ANSWER PHASE */}
      {phase === "answer" && (
        <div className="flex-1 flex flex-col items-center gap-5 pt-4">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
            Question {qIndex + 1} of {total}
          </div>

          {/* Question (smaller) */}
          <div className="w-full rounded-2xl px-4 py-3 text-center opacity-70"
            style={{ backgroundColor: book.color + "15" }}>
            <p className="text-base font-semibold" style={{ color: book.color }}>
              {current.q}
            </p>
          </div>

          {/* Answer (big) */}
          <div
            className="w-full rounded-3xl p-6 text-center shadow-md"
            style={{ backgroundColor: book.color + "33" }}
          >
            <p className="text-xl font-bold leading-relaxed text-gray-800">
              {current.a}
            </p>
          </div>

          <button
            onClick={handleRepeatAnswer}
            className="flex items-center gap-2 text-lg font-semibold text-white rounded-2xl px-6 py-3 shadow active:scale-95 transition-transform"
            style={{ backgroundColor: book.color + "bb" }}
          >
            🔊 Hear it again
          </button>

          <div className="flex-1" />

          {/* Result buttons */}
          <div className="flex gap-3 w-full">
            <button
              onClick={handleGotIt}
              className="flex-1 text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: "#2e7d32" }}
            >
              Got it ⭐
            </button>
            <button
              onClick={handleTricky}
              className="flex-1 text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: "#e65100" }}
            >
              Tricky one
            </button>
          </div>
          <button
            onClick={advance}
            className="w-full text-lg font-semibold text-gray-600 py-3 active:opacity-70"
          >
            Next ➜
          </button>
        </div>
      )}

      {/* FINISH PHASE */}
      {phase === "finish" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-7xl">🎉</div>
          <h2
            className="text-3xl font-bold"
            style={{ color: book.color }}
          >
            You finished it!
          </h2>
          <p className="text-xl text-gray-700 font-semibold">{book.title}</p>

          {/* Stars row */}
          <div className="flex gap-2 justify-center text-3xl">
            {book.questions.map((_, i) => (
              <span key={i}>
                {progress[i] === "got-it" ? "⭐" : "○"}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-600">
            {gotItCount} out of {total} — great effort! 🐉
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handlePlayAgain}
              className="w-full text-xl font-bold text-white rounded-3xl py-5 shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: book.color }}
            >
              Play again
            </button>
            <Link
              href={`/${series.id}`}
              className="block w-full text-xl font-bold text-center rounded-3xl py-5 shadow-lg active:scale-95 transition-transform"
              style={{
                backgroundColor: "transparent",
                border: `3px solid ${book.color}`,
                color: book.color,
              }}
              onClick={() => stop()}
            >
              Pick another book
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
