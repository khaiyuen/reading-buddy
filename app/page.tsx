import Link from "next/link";
import allSeries from "@/content";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-amber-50">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🐉</div>
        <h1 className="text-4xl font-bold text-green-800 mb-2">Reading Buddy</h1>
        <p className="text-xl text-green-700">Pick a series to start!</p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md">
        {allSeries.map((series) => (
          <Link
            key={series.id}
            href={`/${series.id}`}
            className="block rounded-3xl p-6 text-white text-center shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: series.themeColor }}
          >
            <div className="text-4xl mb-2">🐉</div>
            <div className="text-2xl font-bold">{series.title}</div>
            <div className="text-base opacity-90 mt-1">by {series.author}</div>
            <div className="text-sm opacity-80 mt-2">{series.description}</div>
            <div className="mt-3 text-sm font-semibold opacity-90">
              {series.books.length} books · Ages {series.recommendedAge}
            </div>
          </Link>
        ))}
      </div>

      {/* Hidden parent area — long-press accessible via URL */}
      <div className="mt-16 text-xs text-amber-200 select-none">
        <Link href="/parent" className="opacity-0 pointer-events-none" aria-hidden="true">
          parent
        </Link>
      </div>
    </main>
  );
}
