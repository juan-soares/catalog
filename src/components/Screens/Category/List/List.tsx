import { Link } from "react-router-dom";
import { ICardInfo } from "../../../../interfaces";

interface IProps {
  cardsList: ICardInfo[];
}

export function List({ cardsList }: IProps) {
  return (
    <ul>
      {!cardsList.length ? (
        <li>Sem itens na lista.</li>
      ) : (
        cardsList.map(
          ({
            id,
            url,
            cover,
            title,
            release,
            category: { url: categoryURL },
          }) => (
            <li key={id}>
              <Link to={`/${categoryURL}/${url}`}>
                <img src={cover} alt={`Capa de ${title}`} />
                <h3>{`${title} (${release.slice(0, 4)})`}</h3>
              </Link>
            </li>
          )
        )
      )}
    </ul>
  );
}
