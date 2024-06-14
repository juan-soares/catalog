import { useEffect } from "react";
import getData from "../../../utils/getData";
import { useParams } from "react-router-dom";

export function CategoryItem() {
  const categoryStorage =
    localStorage.getItem("selectedCategory") || "Carregando...";
  const { title } = JSON.parse(categoryStorage);

  const { id } = useParams();

  switch (title) {
    case "animes":
      return <p>{id}</p>;

      break;

    default:
      break;
  }
}
