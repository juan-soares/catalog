import { useEffect, useState } from "react";
import { ICategory } from "../../../interfaces";
import { CardsList } from "./CardsList";

export function ScreenCategory() {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>({
    collection: "",
    id: "",
    titleBR: "",
    url: "",
  });

  useEffect(() => {
    const storagedData = localStorage.getItem("selectedCategory");
    if (storagedData) {
      setSelectedCategory(JSON.parse(storagedData));
    }
  }, [selectedCategory]);

  const { titleBR, url, collection } = selectedCategory;

  return (
    <div>
      <h1>{titleBR}</h1>
      <CardsList url={url} collection={collection} />
    </div>
  );
}
