import { Series } from "./types";
import secretExplorers from "./secret-explorers";
import magicTreeHouse from "./magic-tree-house";
import aToZMysteries from "./a-to-z-mysteries";
import dragonMasters from "./dragon-masters";

// Ordered easiest → hardest
const allSeries: Series[] = [
  dragonMasters,    // easiest — short chapters, simple fantasy
  magicTreeHouse,   // easy — adventure/history, moderate length
  secretExplorers,  // medium — non-fiction concepts mixed in
  aToZMysteries,    // hardest — mystery reasoning, most complex
];

export default allSeries;

export function getSeries(id: string): Series | undefined {
  return allSeries.find((s) => s.id === id);
}

export function getBook(seriesId: string, bookId: string) {
  const series = getSeries(seriesId);
  return series?.books.find((b) => b.id === bookId);
}
