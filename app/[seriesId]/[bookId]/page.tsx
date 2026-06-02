import { notFound } from "next/navigation";
import allSeries, { getSeries, getBook } from "@/content";
import QuizClient from "./QuizClient";

export async function generateStaticParams() {
  return allSeries.flatMap((s) =>
    s.books.map((b) => ({ seriesId: s.id, bookId: b.id }))
  );
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ seriesId: string; bookId: string }>;
}) {
  const { seriesId, bookId } = await params;
  const series = getSeries(seriesId);
  const book = getBook(seriesId, bookId);
  if (!series || !book) notFound();

  return <QuizClient series={series} book={book} />;
}
