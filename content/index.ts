import { Series } from "./types";
import secretExplorers from "./secret-explorers";
import magicTreeHouse from "./magic-tree-house";
import aToZMysteries from "./a-to-z-mysteries";
import dragonMasters from "./dragon-masters";
import percyJackson from "./percy-jackson";
import lastFirehawk from "./last-firehawk";
import kingdomOfWrenly from "./kingdom-of-wrenly";

// Ordered easiest → hardest
const allSeries: Series[] = [
  lastFirehawk,     // easiest — very simple text, ages 6-8
  kingdomOfWrenly,  // easy — simple fantasy, ages 6-8
  dragonMasters,    // easy — short chapters, simple fantasy
  magicTreeHouse,   // easy-medium — adventure/history, moderate length
  secretExplorers,  // medium — non-fiction concepts mixed in
  aToZMysteries,    // hard — mystery reasoning, most complex
  percyJackson,     // hardest — long chapter books, complex storylines
];

export default allSeries;

export function getSeries(id: string): Series | undefined {
  return allSeries.find((s) => s.id === id);
}

export function getBook(seriesId: string, bookId: string) {
  const series = getSeries(seriesId);
  return series?.books.find((b) => b.id === bookId);
}
