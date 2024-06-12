import { useEffect, useState } from "react";
import { Section } from "./Section";
import getData from "../../../utils/getData";

interface ICategory {
  id: string;
  title: string;
}

export function Home() {
  const [categories, setCategories] = useState<ICategory[] | null>([]);

  useEffect(() => {
    setCategories(null);
    getData("categories", setCategories);
  }, []);

  if (!categories) {
    return <div>Carregando...</div>;
  } else if (!categories.length) {
    return <div>Sem itens na lista.</div>;
  } else {
    categories.map(({ id, title }) => (
      <Section key={id} id={id} title={title} />
    ));
  }
}
