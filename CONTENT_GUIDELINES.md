# Content Guidelines for Adding Book Series

Rules distilled from real mistakes made (and caught) while building quiz content
for this app. Follow these when adding a new series or book so the same
problems don't recur.

## 1. Never invent titles, order, or plot from memory. Verify against a real source first.

**What went wrong:** Two series (Last Firehawk, Kingdom of Wrenly) were built
with made-up titles, made-up plots, and even the wrong number of books —
entirely from training-data memory, never checked against anything real.

**Do instead:**
- Before writing a single question, look up the real book list: title, number,
  and order (publisher page, Goodreads, a fan wiki, or a photo of the actual
  spines/table of contents if the user has the books).
- Look up a real plot summary per book/chapter (SparkNotes, SuperSummary,
  BookRags, GradeSaver, publisher blurbs) — cross-check at least two sources
  for anything that matters (character names, who did what, how something
  resolves).
- If you can't verify a detail, don't guess — say so, or ask the user, rather
  than inventing something plausible-sounding.

## 2. Chapter boundaries must map 1:1 to the real book's chapters.

**What went wrong:** Real books have far more chapters than a quick "let's
group them into N chunks" plan assumes. Squeezing ~20 real chapters into 8-10
app "chapters" caused events to get merged into the wrong chapter — e.g. a
character's introduction from real Chapter 2 ended up described in "Chapter 1."

**Do instead:**
- Get the real, complete chapter list (title + number) for the book first.
- Make each app chapter correspond to exactly one real chapter. Don't
  pre-decide a smaller number of "app chapters" and then compress content to
  fit — let the real book dictate the count.
- If chapters are very short and combining them is genuinely necessary, only
  combine adjacent real chapters, and verify the combined content still
  doesn't skip or misplace any beat.

## 3. Never let an early chapter reveal something that only happens later.

**What went wrong:** A question in an early chapter revealed a twist (a
stolen item's true location, a character's fate) that the real book doesn't
reveal until many chapters later.

**Do instead:**
- Every question and answer in chapter N must only use facts established by
  the end of chapter N — nothing from chapter N+1 onward.
- If something is genuinely mysterious/unresolved at that point in the real
  book (e.g. "a powerful figure whose identity is not yet known"), write it
  that way — foreshadow, don't spoil.
- When placing a reveal, place it in the exact chapter where the real book
  reveals it, not earlier and not later.

## 4. Use the book's real chapter titles verbatim, not a paraphrase.

**What went wrong:** Chapter titles were rewritten to be "kid-friendly"
paraphrases (e.g. "The Museum Attack") instead of the actual printed title
(e.g. "I Accidentally Vaporize My Pre-Algebra Teacher").

**Do instead:** Use the exact real chapter title as printed in the book. Only
paraphrase if the user explicitly asks for kid-friendly titles instead of
real ones — don't default to it.

## 5. Verify rebuilt/regenerated content — new passes can introduce new bugs.

**What went wrong:** When rebuilding a book's chapters from scratch to fix a
boundary problem, one rewrite pass reintroduced the exact bug that had just
been fixed, plus got several unrelated chapters factually wrong.

**Do instead:**
- Treat any full rewrite as a fresh source of risk, not just a fix — verify
  it the same way you'd verify the original (spot-check chapters against real
  summaries, re-run the "does this chapter only use facts available by then"
  check).
- Don't accept "I rewrote it, trust me" as done. Spot-check a sample of
  chapters — especially ones flagged as uncertain by whoever/whatever wrote
  them — against an independent source before shipping.

## 6. Multiple-choice distractors must match the correct answer's length and detail.

**What went wrong:** Correct answers were written as detailed 2-3 sentence
explanations while wrong answers were short one-liners. The correct answer
was the single longest option 88-100% of the time — a kid could win by
always picking the longest choice, without reading anything.

**Do instead:**
- Write each wrong answer at roughly the same length and narrative detail as
  the correct answer — a specific, plausible, book-appropriate wrong answer
  (wrong name, wrong location, wrong method, wrong consequence), not a short
  vague fragment.
- **Measure it, don't eyeball it.** After writing distractors, run a quick
  script that compares character lengths of the correct answer vs. each
  distractor across every question. Target: the correct answer should be the
  *longest* option no more than ~35% of the time (chance level with 3
  similar-length options is ~33%), and no distractor should fall under ~80%
  of the correct answer's length.
- If a first pass doesn't hit that target, do another pass — "I made them
  longer" isn't the same as "I verified the numbers." A subjective "looks
  close enough" pass is not sufficient; only a measured pass is.

## General principle behind all of the above

**Verify against ground truth before generating, and verify against a
measurement or independent source after generating.** Every mistake in this
list came from skipping one of those two checks — either writing content
without checking it against something real first, or shipping content without
checking the result against something real (or a script) afterward.
