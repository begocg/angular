import { Article } from './Article';

export interface ArticleQuantityChange {
  article: Article;
  changeInQuantity: number;
}