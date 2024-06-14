import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../../interfaces";
import { Loader } from "../../Loader";
import { Filters } from "./Filters";
import { List } from "./List";

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const redirect = useNavigate();

  useEffect(() => {
    const localStorageValue = localStorage.getItem("selectedCategory");
    if (!localStorageValue) return redirect("/");
    setSelectedCategory(JSON.parse(localStorageValue));
  }, []);

  if (!selectedCategory) {
    return <Loader />;
  } else {
    return (
      <div>
        <h1>{selectedCategory?.titleBR}</h1>
        <Filters />
        <List category={selectedCategory.title} />
      </div>
    );
  }
}
