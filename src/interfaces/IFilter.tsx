import { IValue } from "./IValue";

export interface IFilter {
  id: string;
  label: string;
  field: string;
  values: IValue[];
}
