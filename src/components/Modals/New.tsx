import { NewAnime } from "./Anime";

interface IProps {
  selectedCategory: string;
  setSelectedCategory: (arg: string) => void;
}

export function ModalsNew({ selectedCategory, setSelectedCategory }: IProps) {
  return (
    <div>
      {selectedCategory === "animes" && <NewAnime />}
      <button onClick={() => setSelectedCategory("")}>CANCELAR</button>
    </div>
  );
}
