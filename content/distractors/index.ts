// Distractors: per book, per question, 2 plausible-but-wrong answers.
// Keyed by bookId → array of [wrong1, wrong2] pairs, one entry per question in order.
export type BookDistractors = [string, string][];
export type DistractorMap = Record<string, BookDistractors>;

import dragonMastersDistractors from "./dragon-masters";
import magicTreeHouseDistractors from "./magic-tree-house";
import aToZMysteriesDistractors from "./a-to-z-mysteries";
import secretExplorersDistractors from "./secret-explorers";
import percyJacksonDistractors from "./percy-jackson";
import lastFirehawkDistractors from "./last-firehawk";
import kingdomOfWrenlyDistractors from "./kingdom-of-wrenly";

const allDistractors: DistractorMap = {
  ...dragonMastersDistractors,
  ...magicTreeHouseDistractors,
  ...aToZMysteriesDistractors,
  ...secretExplorersDistractors,
  ...percyJacksonDistractors,
  ...lastFirehawkDistractors,
  ...kingdomOfWrenlyDistractors,
};

export default allDistractors;
