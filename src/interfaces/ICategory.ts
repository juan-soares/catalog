import { IFilter } from "./IFilter";

export interface ICategory {
  id: string;
  url: string;
  title: string;
  collection: string;
  filters: IFilter[];
}
