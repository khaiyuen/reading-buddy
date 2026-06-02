export type Question = { q: string; a: string };

export type Book = {
  id: string;
  number: number;
  title: string;
  dragon?: string;
  color: string;
  listenFor: string;
  verified: boolean;
  questions: Question[];
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
