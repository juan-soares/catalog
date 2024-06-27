import { ICategory } from "./ICategory";

export interface ICardInfo {
  id: string;
  title: string;
  cover: string;
  url: string;
  release: string;
  category: ICategory;
}
