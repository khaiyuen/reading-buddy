import Link from "next/link";
import { notFound } from "next/navigation";
import allSeries, { getSeries } from "@/content";

const SERIES_EMOJI: Record<string, string> = {
  "secret-explorers": "🔭",
  "magic-tree-house": "🌳",
  "a-to-z-mysteries": "🔍",
  "dragon-masters": "🐉",
  "percy-jackson": "⚡",
};

export async function generateStaticParams() {
  return allSeries.map((s) => ({ seriesId: s.id }));
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ seriesId: string }>;
}) {
  const { seriesId } = await params;
  const series = getSeries(seriesId);
  if (!series) notFound();

  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-800 font-semibold text-lg mb-6 py-2"
        >
          ← Home
        </Link>

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">{SERIES_EMOJI[seriesId] ?? "📖"}</div>
          <h1 className="text-3xl font-bold text-green-800">{series.title}</h1>
          <p className="text-green-700 mt-1">by {series.author}</p>
          <p className="text-sm text-gray-500 mt-1">{series.books.length} books</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {series.books.map((book) => (
            <BookCard key={book.id} seriesId={seriesId} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}

function BookCard({
  seriesId,
  book,
}: {
  seriesId: string;
  book: (typeof allSeries)[0]["books"][0];
}) {
  return (
    <Link
      href={`/${seriesId}/${book.id}`}
      className="rounded-2xl p-4 text-white text-center shadow-md active:scale-95 transition-transform flex flex-col items-center gap-1"
      style={{ backgroundColor: book.color }}
    >
      <div className="text-3xl">{SERIES_EMOJI[seriesId] ?? "📖"}</div>
      <div className="text-xs font-semibold opacity-80">Book {book.number}</div>
      <div className="text-sm font-bold leading-tight">{book.title}</div>
      {book.dragon && (
        <div className="text-xs opacity-75 mt-1">{book.dragon}</div>
      )}
    </Link>
  );
}
