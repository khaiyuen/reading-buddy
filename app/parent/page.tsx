import Link from "next/link";
import allSeries from "@/content";

export default function ParentPage() {
  const allBooks = allSeries.flatMap((s) =>
    s.books.map((b) => ({ ...b, seriesTitle: s.title, seriesId: s.id }))
  );
  const unverified = allBooks.filter((b) => !b.verified);
  const verified = allBooks.filter((b) => b.verified);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/" className="text-blue-600 font-semibold text-lg">
            ← Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Parent Area</h1>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">About this app</h2>
          <p className="text-sm text-amber-700">
            Questions marked <strong>verified ✅</strong> were fact-checked against the book.
            Questions marked <strong>needs review ⚠️</strong> were written from plot summaries —
            please read through them before using with your child.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-700 mb-3">
            ⚠️ Needs Review ({unverified.length} books)
          </h2>
          <div className="flex flex-col gap-2">
            {unverified.map((b) => (
              <div
                key={b.id}
                className="rounded-xl p-4 bg-white border border-red-200 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-semibold text-gray-800">
                      Book {b.number}: {b.title}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">{b.seriesTitle}</span>
                  </div>
                  <Link
                    href={`/${b.seriesId}/${b.id}`}
                    className="text-xs text-blue-600 shrink-0 font-medium"
                  >
                    Preview →
                  </Link>
                </div>
                <div className="mt-2 text-xs text-gray-500 space-y-1">
                  {b.questions.map((q, i) => (
                    <div key={i}>
                      <span className="font-medium">Q{i + 1}:</span> {q.q}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-700 mb-3">
            ✅ Verified ({verified.length} books)
          </h2>
          <div className="flex flex-col gap-2">
            {verified.map((b) => (
              <div
                key={b.id}
                className="rounded-xl p-3 bg-white border border-green-200 shadow-sm flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">
                  Book {b.number}: {b.title}
                </span>
                <Link
                  href={`/${b.seriesId}/${b.id}`}
                  className="text-xs text-blue-600 font-medium"
                >
                  Preview →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 text-xs text-gray-400 text-center">
          To add books: edit <code>content/dragon-masters.ts</code> and set{" "}
          <code>verified: true</code> after reviewing.
        </div>
      </div>
    </main>
  );
}
