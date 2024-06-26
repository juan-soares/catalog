import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Filters } from "./Filters";
import { List } from "./List";
import { getData } from "../../../utils";
import { ICardInfo, ICategory } from "../../../interfaces";

export function ScreenCategory() {
  const { categoryURL } = useParams();
  const [categoryObject, setCategoryObject] = useState<ICategory | null>(null);
  const [cardsList, setCardsList] = useState<ICardInfo[]>([]);

  const getCategoryObject = async (categoryURL: string) => {
    const res = await fetch(
      `https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/categories?url=${categoryURL}`
    );

    const categoryObjectdata = await res.json();

    setCategoryObject(categoryObjectdata[0]);

    await getData(categoryObjectdata[0].url, setCardsList);
  };

  useEffect(() => {
    getCategoryObject(categoryURL || "");
  }, []);

  if (!categoryObject) {
    return <div>Carregando...</div>;
  } else {
    const { title } = categoryObject;

    return (
      <div>
        <h1>{title}</h1>
        <Filters />
        <List cardsList={cardsList} />
      </div>
    );
  }
}
