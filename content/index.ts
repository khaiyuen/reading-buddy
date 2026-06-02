import { Series } from "./types";
import dragonMasters from "./dragon-masters";

const allSeries: Series[] = [dragonMasters];

export default allSeries;

export function getSeries(id: string): Series | undefined {
  return allSeries.find((s) => s.id === id);
}

export function getBook(seriesId: string, bookId: string) {
  const series = getSeries(seriesId);
  return series?.books.find((b) => b.id === bookId);
}
