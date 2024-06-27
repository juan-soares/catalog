import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICardInfo, ICategory } from "../../../interfaces";
import { getData } from "../../../utils";
import { List } from "./List";

export function ScreenCategory() {
  const { categoryURL } = useParams();
  const [categoryInfo, setCategoryInfo] = useState<ICategory | null>(null);
  const [cardsInfo, setCardsInfo] = useState<ICardInfo[]>([]);

  const getCategoryInfo = async () => {
    const res = await fetch(
      `https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/categories?url=${
        categoryURL || ""
      }`
    );

    const data: ICategory[] = await res.json();

    setCategoryInfo(data[0]);

    await getData(`${data[0].collection}`, setCardsInfo);
  };

  useEffect(() => {
    getCategoryInfo();
  }, []);

  if (!categoryInfo) {
    return (
      <div>
        Ops! Caminho errado. <Link to="/">Voltar?</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{categoryInfo.title}</h1>
        <List cardsInfo={cardsInfo} />
      </div>
    );
  }
}
