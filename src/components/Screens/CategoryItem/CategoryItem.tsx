import { useParams } from "react-router-dom";
import { Anime } from "./Anime";
import { Loader } from "../../Loader";

export function CategoryItem() {
  const categoryStorage = localStorage.getItem("selectedCategory");

  if (!categoryStorage) {
    return <Loader />;
  } else {
    const { title } = JSON.parse(categoryStorage);
    const { id } = useParams();

    switch (title) {
      case "animes":
        return <Anime category={title} title={id || ""} />;

        break;

      default:
        break;
    }
  }
}
