import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../contexts";

export function Navbar() {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav>
      {categories.map(({ id, url, title }) => {
        return (
          <Link key={id} to={`/${url}`}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
