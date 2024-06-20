import { useContext } from "react";
import { CategoriesContext } from "../../../contexts";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interfaces";

export function Navbar() {
  const { categories } = useContext(CategoriesContext);

  const setCategoryInLocalStorage = (category: ICategory) => {
    localStorage.setItem("selectedCategory", JSON.stringify(category));
  };

  return (
    <nav>
      {categories.map((category) => {
        const { id, url, titleBR } = category;

        return (
          <Link
            key={id}
            to={`/${url}`}
            onClick={() => setCategoryInLocalStorage(category)}
          >
            {titleBR}
          </Link>
        );
      })}
    </nav>
  );
}
