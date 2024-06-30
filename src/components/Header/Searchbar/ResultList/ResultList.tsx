import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSearch } from "../../../../../json-db/api";
import { ICardInfo } from "../../../../interfaces";

interface IProps {
  searchedValue: string;
}


export function ResultList({ searchedValue }: IProps) {
  const [results, setResults] = useState<null | ICardInfo[]>(null);

  useEffect(() => {
    const getData = async () => {
      const results = await getSearch(searchedValue);
      setResults(results);
    };

    getData();
  }, []);

  return (
    <ul>
      {!results ? (
        <li>Carregando...</li>
      ) : !results.length ? (
        <li>Sem resultados.</li>
      ) : (
        <>
          {results.map(
            ({ id, category:{url: categoryURL, title: categoryTitle}, url, cover, title, release }) => (
              <li key={id}>
                <Link to={`/${categoryURL}/${url}`}>
                  <img src={cover} alt={`Capa de ${title}.`} />
                  <span>{`${title} (${release.slice(
                    0,
                    4
                  )}) [${categoryTitle}]`}</span>
                </Link>
              </li>
            )
          )}
        </>
      )}
    </ul>
  );
}
