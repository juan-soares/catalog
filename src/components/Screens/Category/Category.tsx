import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICardInfo, ICategory } from "../../../interfaces";
import { CardsList } from "./CardsList";

export function ScreenCategory() {
  const { categoryURL } = useParams();
  const [category, setCategory] = useState<null | ICategory>(null);
  const [cardsInfo, setCardsInfo] = useState<ICardInfo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://catalog-1kpk--3001--802dc1bc.local-credentialless.webcontainer.io/categories?url=${categoryURL}`
      );

      const data = await res.json();

      setCategory(data[0]);

      const resList = await fetch(
        `https://catalog-1kpk--3001--802dc1bc.local-credentialless.webcontainer.io/${data[0].collection}`
      );

      const dataList = await resList.json();

      setCardsInfo(dataList);
    };

    getData();
  }, [categoryURL]);

  if (!category) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  } else {
    const { titleBR } = category;

    return (
      <div>
        <h1>{titleBR}</h1>
        <CardsList cardsInfo={cardsInfo} />
      </div>
    );
  }
}
