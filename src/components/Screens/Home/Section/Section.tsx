import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, ICategoryItem } from "../../../../interfaces";
import { getData } from "../../../../utils";

export function Section({ url, titleBR, collection }: ICategory) {
  const [categoryItems, setCategoryItems] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    getData(`${collection}`, setCategoryItems);
  }, []);

  return (
    <section>
      <h1>{titleBR}</h1>
      <span>L</span>
      <ul>
        {categoryItems.map(({ id, url: itemUrl, cover, title, release }) => (
          <li key={id}>
            <Link to={`/${url}/${itemUrl}`}>
              <img src={cover} alt={`Capa de ${title}`} />
              <h2>{`${title} (${release.slice(0, 4)})`}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <span>R</span>
    </section>
  );
}
