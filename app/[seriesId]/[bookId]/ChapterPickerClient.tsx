"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSpeech } from "@/components/useSpeech";
import type { Series, Book } from "@/content/types";

export default function ChapterPickerClient({ series, book }: { series: Series; book: Book }) {
  const { speak, stop } = useSpeech();
  const [gotItCounts, setGotItCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const counts: Record<string, number> = {};
    for (const ch of book.chapters ?? []) {
      const key = `${book.id}-${ch.id}`;
      try {
        const stored = localStorage.getItem(`progress-${key}`);
        const data: Record<number, string> = stored ? JSON.parse(stored) : {};
        counts[ch.id] = Object.values(data).filter((v) => v === "got-it").length;
      } catch {
        counts[ch.id] = 0;
      }
    }
    setGotItCounts(counts);
  }, [book]);

  const chapters = book.chapters ?? [];
  const totalQuestions = chapters.reduce((n, ch) => n + ch.questions.length, 0);
  const totalGotIt = Object.values(gotItCounts).reduce((n, v) => n + v, 0);

  return (
    <main className="min-h-screen flex flex-col p-5" style={{ backgroundColor: book.color + "18" }}>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
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

      {/* Overall progress */}
      <div
        className="rounded-2xl px-5 py-3 mb-5 flex items-center justify-between"
        style={{ backgroundColor: book.color + "22" }}
      >
        <span className="text-sm font-semibold text-gray-600">Overall progress</span>
        <span className="text-sm font-bold" style={{ color: book.color }}>
          {totalGotIt} / {totalQuestions} ⭐
        </span>
      </div>

      {/* listenFor hint */}
      <button
        onClick={() => speak(book.listenFor)}
        className="rounded-2xl px-5 py-4 mb-6 text-center active:scale-95 transition-transform"
        style={{ backgroundColor: book.color + "22" }}
      >
        <p className="text-lg text-gray-700 leading-relaxed italic">"{book.listenFor}"</p>
        <p className="text-sm mt-1 font-semibold" style={{ color: book.color }}>🔊 Tap to hear</p>
      </button>

      {/* Chapter grid */}
      <div className="grid grid-cols-1 gap-3">
        {chapters.map((ch) => {
          const got = gotItCounts[ch.id] ?? 0;
          const total = ch.questions.length;
          const done = got === total;
          return (
            <Link
              key={ch.id}
              href={`/${series.id}/${book.id}/${ch.id}`}
              className="flex items-center gap-4 rounded-2xl p-4 shadow-sm active:scale-95 transition-all border-2"
              style={{
                backgroundColor: done ? book.color + "22" : "white",
                borderColor: book.color + (done ? "88" : "33"),
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ backgroundColor: book.color, color: "white" }}
              >
                {ch.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold leading-snug text-gray-800">{ch.title}</div>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: total }).map((_, i) => (
                    <span key={i} className="text-xs">
                      {i < got ? "⭐" : "○"}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xl" style={{ color: book.color }}>›</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
