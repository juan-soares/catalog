import { useEffect, useState } from "react";
import {
  IAnime,
  ICardInfo,
  IFilter,
  IValuesToFilter,
} from "../../../../interfaces";
import { ValuesList } from "./ValuesList";

interface IProps {
  collection: string;
  filtersList: IFilter[];
  setCardsInfo: React.Dispatch<React.SetStateAction<ICardInfo[]>>;
}

export function Filters({ collection, filtersList, setCardsInfo }: IProps) {
  const filtersFields: IValuesToFilter[] = filtersList.map(({ field }) => ({
    [field]: [],
  }));

  const [valuesToFilter, setValuesToFilter] = useState<IValuesToFilter>(
    Object.assign({}, ...filtersFields)
  );

  const getFilteredData = async () => {
    const res = await fetch(
      `https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/${collection}`
    );

    const data: IAnime[] = await res.json();

    const filteredData = data.filter((anime) =>
      Object.keys(valuesToFilter).every(
        (key) =>
          valuesToFilter[key].length === 0 ||
          valuesToFilter[key].includes(anime[key])
      )
    );

    setCardsInfo(filteredData);
  };

  useEffect(() => {
    getFilteredData();
  }, [valuesToFilter]);

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
