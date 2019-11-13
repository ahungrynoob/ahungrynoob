export interface IItem {
  id?: number;
  title?: string;
  updated_at?: string;
  body?: string;
}

export type ArticleList = IItem[];
