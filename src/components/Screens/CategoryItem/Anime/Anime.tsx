import { useEffect, useState } from "react";
import getData from "../../../../utils/getData";
import { Loader } from "../../../Loader";
import { ICategoryItem } from "../../../../interfaces";

interface IProps {
  category: string;
  title: string;
}

interface IAnime extends ICategoryItem {
  titleTranslated: string;
}

export function Anime({ category, title }: IProps) {
  const [animeRes, setAnimeRes] = useState<IAnime[] | null>(null);
  const [anime, setAnime] = useState<IAnime | null>(null);

  useEffect(() => {
    getData(`${category}?title=${title}`, setAnimeRes);
    setAnime(animeRes?.[0] || null);
  }, []);

  if (!anime) {
    return <Loader />;
  } else {
    const { cover, title, titleTranslated } = anime;

    return (
      <div>
        <img src={cover} alt={`Capa de ${title}.`} />
        <h2>{title}</h2>

        <div>
          <label>Título: </label>
          <span>{title}</span>
          <label>Título Traduzido: </label>
          <span>{titleTranslated}</span>
        </div>
      </div>
    );
  }
}
