import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICategory } from "../../../interfaces";

export function ScreenCategory() {
  const { categoryURL } = useParams();
  const [categoryObject, setCategoryObject] = useState<ICategory | null>(null);

  const getCategoryObject = async (categoryURL: string) => {
    const res = await fetch(
      `https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/categories?url=${categoryURL}`
    );

    const data = await res.json();

    setCategoryObject(data[0]);
  };

  useEffect(() => {
    getCategoryObject(categoryURL || "");
  }, []);

  if (!categoryObject) {
    return <div>Carregando...</div>;
  } else {
    const { titleBR } = categoryObject;

    return (
      <div>
        <h1>{titleBR}</h1>
      </div>
    );
  }
}
