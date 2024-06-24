import { useEffect, useState } from "react";
import { getData } from "../../../../../utils";
import { IValue } from "../../../../../interfaces";

interface IProps {
  fieldName: string;
  filterID: string;
}

interface IFilter {
  [key: string]: string;
}

export function ValuesList({ fieldName, filterID }: IProps) {
  const [values, setValues] = useState<IValue[]>([]);
  const [filtersList, setFiltersList] = useState<IFilter[]>([]);

  useEffect(() => {
    getData(`values?filter=${filterID}`, setValues);
  }, []);

  const handleChange = (inputName: string, inputValue: string) => {
    const itExists = filtersList.findIndex(
      (filter) => filter[inputName] === inputValue
    );

    if (itExists === -1) {
      setFiltersList((prevState) => [
        ...prevState,
        { [inputName]: inputValue },
      ]);
    } else {
      setFiltersList((prevState) =>
        prevState.filter((filter) => filter[inputName] !== inputValue)
      );
    }

    console.log(filtersList);
  };

  return (
    <ul>
      {values.map(({ id, value }) => (
        <li key={id}>
          <input
            type="checkbox"
            id={id}
            name={fieldName}
            value={id}
            onChange={({ target: { name, value } }) =>
              handleChange(name, value)
            }
          />
          <label htmlFor={id}>{value}</label>
        </li>
      ))}
    </ul>
  );
}
