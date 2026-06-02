import { Series } from "./types";
import secretExplorers from "./secret-explorers";
import magicTreeHouse from "./magic-tree-house";
import aToZMysteries from "./a-to-z-mysteries";
import dragonMasters from "./dragon-masters";

// Ordered easiest → hardest
const allSeries: Series[] = [
  secretExplorers,  // ages 5-8, shortest books, simplest plots
  magicTreeHouse,   // ages 6-9, adventure/history, moderate length
  aToZMysteries,    // ages 6-9, mystery genre, slightly more complex
  dragonMasters,    // ages 6-9, fantasy, most text-heavy
];

export default allSeries;

export function getSeries(id: string): Series | undefined {
  return allSeries.find((s) => s.id === id);
}

export function getBook(seriesId: string, bookId: string) {
  const series = getSeries(seriesId);
  return series?.books.find((b) => b.id === bookId);
}
