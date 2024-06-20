import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../contexts";

export function Navbar() {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav>
      {categories.map((category) => {
        const { id, url, titleBR } = category;

        return (
          <Link key={id} to={`/${url}`}>
            {titleBR}
          </Link>
        );
      })}
    </nav>
  );
}
