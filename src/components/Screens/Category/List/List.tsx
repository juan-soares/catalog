import { Link } from "react-router-dom";
import { ICategoryItem } from "../../../../interfaces";
import { Loader } from "../../../Loader";
import { useEffect, useState } from "react";
import getData from "../../../../utils/getData";

interface IProps {
  category: string;
}

export function List({ category }: IProps) {
  const [listItems, setListItems] = useState<ICategoryItem[] | null>([]);

  useEffect(() => {
    setListItems(null);
    getData(category, setListItems);
  }, []);

  if (!listItems) {
    return <Loader />;
  } else if (listItems.length === 0) {
    return (
      <ul>
        <li>Sem itens na lista.</li>
      </ul>
    );
  } else {
    return (
      <ul>
        {listItems.map(({ id, title, cover, release }) => (
          <Link key={id} to={id}>
            <img src={cover} alt={`Capa de ${title}.`} />
            <h2>{`${title} (${release.slice(0, 4)})`}</h2>
          </Link>
        ))}
      </ul>
    );
  }
}
