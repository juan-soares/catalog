import { Link } from "react-router-dom";
import { ICardInfo } from "../../../../interfaces";

interface IProps {
  cardsInfo: ICardInfo[];
}

export function List({ cardsInfo }: IProps) {
  return (
    <ul>
      {!cardsInfo.length ? (
        <li>Sem itens na lista.</li>
      ) : (
        cardsInfo.map(
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
