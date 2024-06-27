import { useContext } from "react";
import { CategoriesContext } from "../../../contexts";
import { Section } from "./Section";

export function ScreenHome() {
  const categoriesWithData = useContext(CategoriesContext);

  return (
    <main>
      {categoriesWithData.map(({ category: { id, title }, cardsInfo }) => (
        <Section key={id} title={title} cardsInfo={cardsInfo} />
      ))}
    </main>
  );
}
