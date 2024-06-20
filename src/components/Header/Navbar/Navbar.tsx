import { useContext } from "react";
import { CategoriesContext } from "../../../contexts";
import { Link } from "react-router-dom";

export function Navbar() {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav>
      {categories.map(({ id, url, titleBR }) => (
        <Link key={id} to={`/${url}`}>
          {titleBR}
        </Link>
      ))}
    </nav>
  );
}
