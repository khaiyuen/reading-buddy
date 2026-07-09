export type Question = { q: string; a: string };

export type Chapter = {
  id: string;
  number: number;
  title: string;
  listenFor: string;
  questions: Question[];
};

export type Book = {
  id: string;
  number: number;
  title: string;
  dragon?: string;
  color: string;
  listenFor: string;
  verified: boolean;
  questions: Question[];
  chapters?: Chapter[];
};

export type Series = {
  id: string;
  title: string;
  author: string;
  description: string;
  recommendedAge: string;
  themeColor: string;
  books: Book[];
};
