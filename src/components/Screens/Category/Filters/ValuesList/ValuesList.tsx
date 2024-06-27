import { IValue, IValuesToFilter } from "../../../../../interfaces";

interface IProps {
  field: string;
  valuesList: IValue[];
  setValuesToFilter: React.Dispatch<React.SetStateAction<IValuesToFilter>>;
}

export function ValuesList({ field, valuesList, setValuesToFilter }: IProps) {
  const handleCheck = (isChecked: boolean, inputValue: string) => {
    setValuesToFilter((prevState) => ({
      ...prevState,
      [field]: isChecked
        ? [...prevState[field], inputValue]
        : prevState[field].filter((filterValue) => filterValue !== inputValue),
    }));
  };

  return (
    <>
      {valuesList.map(({ id, value }) => (
        <div key={id}>
          <input
            type="checkbox"
            id={id}
            value={id}
            onChange={({ target: { checked, value } }) =>
              handleCheck(checked, value)
            }
          />
          <label htmlFor={id}>{value}</label>
        </div>
      ))}
    </>
  );
}
