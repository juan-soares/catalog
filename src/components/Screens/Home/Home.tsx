import { useContext } from "react";
import { CategoriesContext } from "../../../contexts";
import { Section } from "./Section";

export function ScreenHome() {
  const { categories } = useContext(CategoriesContext);

  return (
    <main>
      {categories.map((category) => (
        <Section key={category.id} {...category} />
      ))}
    </main>
  );
}
