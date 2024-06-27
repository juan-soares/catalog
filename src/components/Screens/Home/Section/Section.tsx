import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICardInfo } from "../../../../interfaces";

interface IProps {
  title: string;
  cardsInfo: ICardInfo[];
}

export function Section({ title, cardsInfo }: IProps) {
  return (
    <section>
      <h1>{title}</h1>
      <span>L</span>
      <ul>
        {cardsInfo.map(
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
                <h2>{`${title} (${release.slice(0, 4)})`}</h2>
              </Link>
            </li>
          )
        )}
      </ul>
      <span>R</span>
    </section>
  );
}
