import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../../../utils/getData.tsx";

interface ICategory {
  id: string;
  title: string;
  titleBR: string;
}

export function Navbar() {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  useEffect(() => {
    getData("categories", setCategoryList);
  }, []);

  const setSelectedCategory = (category: ICategory) => {
    localStorage.setItem("selectedCategory", JSON.stringify(category));
  };

  return (
    <nav>
      <ul>
        <li>
          {categoryList.map((category) => (
            <Link
              key={category.id}
              to={`/${category.title}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.titleBR}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}
