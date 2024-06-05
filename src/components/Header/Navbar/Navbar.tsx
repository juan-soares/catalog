import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../../../utils/getData.tsx";

export function Navbar() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getData("categories", setCategoryList);
  }, []);

  return (
    <nav>
      <ul>
        <li>
          {categoryList.map(({ title }) => (
            <Link key={title} to={`/${title}`}>{title}</Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}
