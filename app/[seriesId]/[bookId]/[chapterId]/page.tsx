import { notFound } from "next/navigation";
import allSeries, { getSeries, getBook } from "@/content";
import QuizClient from "../QuizClient";

export async function generateStaticParams() {
  return allSeries.flatMap((s) =>
    s.books.flatMap((b) =>
      (b.chapters ?? []).map((ch) => ({
        seriesId: s.id,
        bookId: b.id,
        chapterId: ch.id,
      }))
    )
  );
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ seriesId: string; bookId: string; chapterId: string }>;
}) {
  const { seriesId, bookId, chapterId } = await params;
  const series = getSeries(seriesId);
  const book = getBook(seriesId, bookId);
  if (!series || !book?.chapters) notFound();

  const chapter = book.chapters.find((ch) => ch.id === chapterId);
  if (!chapter) notFound();

  // Construct a virtual book object so QuizClient works unchanged.
  // The composite id is the distractor lookup key (e.g. "pj-01-ch-01").
  const bookForQuiz = {
    ...book,
    id: `${book.id}-${chapterId}`,
    title: chapter.title,
    listenFor: chapter.listenFor,
    questions: chapter.questions,
  };

  return (
    <QuizClient
      series={series}
      book={bookForQuiz}
      backHref={`/${seriesId}/${bookId}`}
    />
  );
}
