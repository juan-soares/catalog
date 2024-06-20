import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSearch } from "../../../../../json-db/api";

interface IProps {
  searchedValue: string;
}

interface ITitle {
  id: string;
  cover: string;
  title: string;
  release: string;
  category: string;
  url: string;
}

export function ResultList({ searchedValue }: IProps) {
  const [results, setResults] = useState<null | ITitle[]>(null);

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
            ({ id, category, url, cover, title, release }: ITitle) => (
              <li key={id}>
                <Link to={`/${category}/${url}`}>
                  <img src={cover} alt={`Capa de ${title}.`} />
                  <span>{`${title} (${release.slice(
                    0,
                    4
                  )}) [${category}]`}</span>
                </Link>
              </li>
            )
          )}
        </>
      )}
    </ul>
  );
}
