import { useEffect, useState } from "react";
import { getData } from "../../../../../utils";
import { IValue } from "../../../../../interfaces";

interface IProps {
  fieldName: string;
  filterID: string;
}

interface IValuesToFilter {
  [key: string]: string;
}

export function ValuesList({ fieldName, filterID }: IProps) {
  const [values, setValues] = useState<IValue[]>([]);
  const [valuesToFilter, setValuesToFilter] = useState<IValuesToFilter[]>([]);

  useEffect(() => {
    getData(`values?filter=${filterID}`, setValues);
  }, []);

  return (
    <ul>
      {values.map(({ id, value }) => (
        <li key={id}>
          <input
            type="checkbox"
            id={id}
            name={fieldName}
            value={id}
            onChange={({ target: { name, value } }) => {
              console.log(name);
            }}
          />
          <label htmlFor={id}>{value}</label>
        </li>
      ))}
    </ul>
  );
}
