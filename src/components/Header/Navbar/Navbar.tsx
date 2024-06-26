import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../contexts";

export function Navbar() {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav>
      {categories.map((category) => {
        const { id, url, title } = category;

        return (
          <Link key={id} to={`/${url}`}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
