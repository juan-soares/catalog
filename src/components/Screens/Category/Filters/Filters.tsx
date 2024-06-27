import { useEffect, useState } from "react";
import { IFilter, IValuesToFilter } from "../../../../interfaces";
import { ValuesList } from "./ValuesList";

interface IProps {
  filtersList: IFilter[];
}

export function Filters({ filtersList }: IProps) {
  const [valuesToFilter, setValuesToFilter] = useState<IValuesToFilter>({});

  return (
    <aside>
      {filtersList.map(({ id, label, field, values }) => (
        <div key={id}>
          <h3>{label}</h3>
          <ValuesList
            field={field}
            valuesList={values}
            setValuesToFilter={setValuesToFilter}
          />
        </div>
      ))}
    </aside>
  );
}
