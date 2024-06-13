import { Link } from "react-router-dom";
import { ICategoryItem } from "../../../../../interfaces";

interface IListItem extends ICategoryItem {
  category: string;
}

export function ListItem({ category, title, cover, release }: IListItem) {
  return (
    <li>
      <Link to={`${category}/${title}`}>
        <img src={cover} alt={`Capa de ${title}.`} />
        <h2>{`${title} (${release.slice(0, 4)})`}</h2>
      </Link>
    </li>
  );
}
