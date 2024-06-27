import { useContext } from "react";
import { CategoriesContext } from "../../../contexts";
import { Section } from "./Section";

export function ScreenHome() {
  const { categories } = useContext(CategoriesContext);

  return (
    <main>
      {categories.map(({ id, title, collection }) => (
        <Section
          key={id}
          categoryTitle={title}
          categoryCollection={collection}
        />
      ))}
    </main>
  );
}
