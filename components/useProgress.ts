"use client";

import { useCallback, useEffect, useState } from "react";

type ProgressMap = Record<string, Record<number, "got-it" | "tricky" | undefined>>;

function load(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem("rb-progress") ?? "{}");
  } catch {
    return {};
  }
}

function save(data: ProgressMap) {
  try {
    localStorage.setItem("rb-progress", JSON.stringify(data));
  } catch {
    /* storage unavailable */
  }
}

export function useProgress(bookId: string) {
  const [progress, setProgress] = useState<Record<number, "got-it" | "tricky" | undefined>>({});

  useEffect(() => {
    const all = load();
    setProgress(all[bookId] ?? {});
  }, [bookId]);

  const mark = useCallback(
    (index: number, result: "got-it" | "tricky") => {
      setProgress((prev) => {
        const next = { ...prev, [index]: result };
        const all = load();
        all[bookId] = next;
        save(all);
        return next;
      });
    },
    [bookId]
  );

  const isBookDone = useCallback(
    (bId: string, total: number) => {
      const all = load();
      const bp = all[bId] ?? {};
      return Object.keys(bp).length >= total;
    },
    []
  );

  const gotItCount = Object.values(progress).filter((v) => v === "got-it").length;

  return { progress, mark, gotItCount, isBookDone };
}
