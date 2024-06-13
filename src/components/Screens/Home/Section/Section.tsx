import { useEffect, useState } from "react";
import { Loader } from "../../../Loader";
import { ListItem } from "./ListItem/ListItem";
import { ICategoryItem } from "../../../../interfaces";
import getData from "../../../../utils/getData";

interface IProps {
  categoryID: string;
  categoryTitle: string;
}

export function Section({ categoryTitle }: IProps) {
  const [categoryItems, setCategoryItems] = useState<ICategoryItem[] | null>(
    []
  );

  useEffect(() => {
    setCategoryItems(null), getData(categoryTitle, setCategoryItems);
  }, []);

  return (
    <section>
      <h1>{categoryTitle}</h1>
      <ul>
        <span>L</span>

        {!categoryItems ? (
          <Loader />
        ) : categoryItems.length === 0 ? (
          <li>Sem itens na lista.</li>
        ) : (
          <>
            {categoryItems.map((categoryItem) => (
              <ListItem
                key={categoryItem.id}
                category={categoryTitle}
                {...categoryItem}
              />
            ))}
          </>
        )}

        <span>R</span>
      </ul>
    </section>
  );
}
