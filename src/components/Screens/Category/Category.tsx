import { useEffect, useState } from "react";
import { ICategory } from "../../../interfaces";
import { useNavigate } from "react-router-dom";

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const redirect = useNavigate();

  useEffect(() => {
    const localStorageValue = localStorage.getItem("selectedCategory");
    if (!localStorageValue) return redirect("/");
    setSelectedCategory(JSON.parse(localStorageValue));
  }, []);

  return (
    <div>
      <h1>{selectedCategory?.titleBR}</h1>
    </div>
  );
}
