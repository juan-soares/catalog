import { Link } from "react-router-dom";
import { ICardInfo } from "../../../../interfaces";

interface IProps {
  cardsInfo: ICardInfo[];
}

export function CardsList({ cardsInfo }: IProps) {
  return (
    <ul>
      {!cardsInfo.length ? (
        <li>Sem itens na lista.</li>
      ) : (
        <>
          {cardsInfo.map(({ id, url, cover, title, release }) => (
            <li key={id}>
              <Link to={url}>
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
