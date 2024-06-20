import { useEffect, useState } from "react";
import { getData } from "../../../../utils";
import { Link } from "react-router-dom";
import { ICategoryItem } from "../../../../interfaces";

interface IProps {
  collection: string;
  url: string;
}

export function CardsList({ url: categoryUrl, collection }: IProps) {
  const [titlesList, setTitlesList] = useState<null | ICategoryItem[]>(null);

  useEffect(() => {
    if (!collection) return;
    getData(`${collection}`, setTitlesList);
  }, [collection]);

  return (
    <ul>
      {!titlesList ? (
        <li>Carregando...</li>
      ) : !titlesList.length ? (
        <li>Sem itens na lista.</li>
      ) : (
        <>
          {titlesList.map(({ url, cover, title, release }) => (
            <li>
              <Link to={`/${categoryUrl}/${url}`}>
                <img src={cover} alt={`Capa de ${title}.`} />
                <h2>{`${title} (${release.slice(0, 4)})`}</h2>
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
