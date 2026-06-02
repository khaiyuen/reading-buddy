import Link from "next/link";
import allSeries from "@/content";

const SERIES_EMOJI: Record<string, string> = {
  "secret-explorers": "🔭",
  "magic-tree-house": "🌳",
  "a-to-z-mysteries": "🔍",
  "dragon-masters": "🐉",
};

const DIFFICULTY_LABEL: Record<string, { label: string; stars: string }> = {
  "dragon-masters":   { label: "Easiest", stars: "⭐" },
  "magic-tree-house": { label: "Easy", stars: "⭐⭐" },
  "secret-explorers": { label: "Medium", stars: "⭐⭐⭐" },
  "a-to-z-mysteries": { label: "A bit harder", stars: "⭐⭐⭐⭐" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-amber-50">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">📚</div>
        <h1 className="text-4xl font-bold text-green-800 mb-2">Reading Buddy</h1>
        <p className="text-xl text-green-700">Pick a series to start!</p>
        <p className="text-sm text-green-600 mt-1 opacity-70">Easiest at the top ↓</p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md">
        {allSeries.map((series) => {
          const emoji = SERIES_EMOJI[series.id] ?? "📖";
          const diff = DIFFICULTY_LABEL[series.id];
          return (
            <Link
              key={series.id}
              href={`/${series.id}`}
              className="block rounded-3xl p-6 text-white shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: series.themeColor }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl leading-none">{emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-2xl font-bold leading-tight">{series.title}</div>
                  <div className="text-sm opacity-90 mt-0.5">by {series.author}</div>
                  <div className="text-sm opacity-80 mt-2 leading-snug">{series.description}</div>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="text-sm font-semibold opacity-90 bg-white/20 rounded-full px-3 py-1">
                      {series.books.length} books
                    </span>
                    <span className="text-sm font-semibold opacity-90 bg-white/20 rounded-full px-3 py-1">
                      Ages {series.recommendedAge}
                    </span>
                    {diff && (
                      <span className="text-sm font-bold opacity-95 bg-white/30 rounded-full px-3 py-1">
                        {diff.stars} {diff.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Subtle parent link — navigable by URL /parent */}
      <div className="mt-14 mb-4">
        <Link href="/parent" className="text-xs text-amber-300 opacity-30 hover:opacity-60 transition-opacity">
          ⚙
        </Link>
      </div>
    </main>
  );
}
