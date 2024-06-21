import { IFilter } from "./IFilter";

export interface ICategory {
  id: string;
  url: string;
  titleBR: string;
  collection: string;
  filters: IFilter[]

}
