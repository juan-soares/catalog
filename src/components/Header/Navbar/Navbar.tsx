import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../contexts";

export function Navbar() {
  const categoriesWithData = useContext(CategoriesContext);

  return (
    <nav>
      {categoriesWithData.map(({ category: { id, url, title } }) => {
        return (
          <Link key={id} to={`/${url}`}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
