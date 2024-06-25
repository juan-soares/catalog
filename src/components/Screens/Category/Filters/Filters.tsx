import { useEffect, useState } from "react";
import { IFilter } from "../../../../interfaces";
import { ValuesList } from "./ValuesList";

interface IProps {
  filters: IFilter[];
}

interface IValuesToFilter {
  [key: string]: string[];
}

export function Filters({ filters }: IProps) {
  const [valuesToFilter, setValuesToFilter] = useState<IValuesToFilter>({});

  const transformFiltersArrayIntoObject = () => {
    const onlyFieldsName = filters.reduce((acumulatedValue, filter) => {
      acumulatedValue[filter.field] = [];
      return acumulatedValue;
    }, {} as { [key: string]: [] });

    setValuesToFilter(onlyFieldsName);
  };

  useEffect(() => {
    transformFiltersArrayIntoObject();
  }, [filters]);

  return (
    <aside>
      <h2>Filtros</h2>
      {filters.map(({ id, label, field }) => (
        <div key={id}>
          <h3>{label}</h3>
          <ValuesList
            valuesToFilter={valuesToFilter}
            setValuesToFilter={setValuesToFilter}
            fieldName={field}
            filterID={id}
          />
        </div>
      ))}
    </aside>
  );
}
