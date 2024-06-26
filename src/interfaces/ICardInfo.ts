import { ICategory } from "./ICategory";

export interface ICardInfo {
  id: string;
  url: string;
  cover: string;
  title: string;
  release: string;
  category: ICategory;
}
