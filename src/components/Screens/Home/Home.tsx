import { useEffect, useState } from "react";
import { Section } from "./Section";
import getData from "../../../utils/getData";
import { Loader } from "../../Loader";

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
    return <Loader />;
  } else if (!categories.length) {
    return (
      <div>
        <p>Sem itens na lista.</p>
      </div>
    );
  } else {
    return (
      <div>
        {categories.map(({ id, title }) => (
          <Section key={id} categoryID={id} categoryTitle={title} />
        ))}
      </div>
    );
  }
}
