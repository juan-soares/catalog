import { useEffect, useState } from "react";
import { getData } from "../../../../../utils";
import { IValue } from "../../../../../interfaces";

interface IProps {
  filterID: string;
}

export function ValuesList({ filterID }: IProps) {
  const [values, setValues] = useState<IValue[]>([]);

  useEffect(() => {
    getData(`values?filter=${filterID}`, setValues);
  }, []);

  return (
    <ul>
      {values.map(({ id, value }) => (
        <li key={id}>
          <input type="checkbox" id={id} value={value} />
          <label htmlFor={id}>{value}</label>
        </li>
      ))}
    </ul>
  );
}
