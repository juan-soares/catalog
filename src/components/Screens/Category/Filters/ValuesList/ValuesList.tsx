import { useEffect, useState } from "react";
import { getData } from "../../../../../utils";
import { IValue } from "../../../../../interfaces";

interface IValuesToFilter {
  [key: string]: string[];
}

interface IProps {
  valuesToFilter: IValuesToFilter;
  setValuesToFilter: React.Dispatch<React.SetStateAction<IValuesToFilter>>;
  fieldName: string;
  filterID: string;
}

export function ValuesList({
  valuesToFilter,
  setValuesToFilter,
  fieldName,
  filterID,
}: IProps) {
  const [values, setValues] = useState<IValue[]>([]);

  useEffect(() => {
    getData(`values?filter=${filterID}`, setValues);
  }, []);

  const handleChange = (
    inputIsChecked: boolean,
    inputName: string,
    inputValue: string
  ) => {
    setValuesToFilter((prevState) => ({
      ...prevState,
      [inputName]: !inputIsChecked
        ? [...prevState[inputName], inputValue]
        : prevState[inputName].filter((filter) => filter !== inputValue),
    }));

    console.log(valuesToFilter);
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
            onChange={({ target: { name, value, checked } }) =>
              handleChange(checked, name, value)
            }
          />
          <label htmlFor={id}>{value}</label>
        </li>
      ))}
    </ul>
  );
}
