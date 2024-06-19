import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    async function postData(searchedValue: string) {
      const resAnime = await fetch(
        `https://catalog-1kpk--3001--9e2d28a3.local-credentialless.webcontainer.io/animes?title=${searchedValue}`
      );

      const data = await resAnime.json();

      setResults(data);
    }
    postData(searchedValue);
  }, [searchedValue]);

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
                  <span>{`${title} (${release.slice(0, 4)}) [${category}]`}</span>
                </Link>
              </li>
            )
          )}
        </>
      )}
    </ul>
  );
}
