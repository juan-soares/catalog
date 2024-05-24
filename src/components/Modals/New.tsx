import { NewAnime } from "./Anime";

interface IProps {
  selectedCategory: string;
  setSelectedCategory: (arg: string) => void;
}

export function ModalsNew({ selectedCategory, setSelectedCategory }: IProps) {
  return (
    <div>
      <h1>Novo </h1>
      {selectedCategory === "animes" && (
        <NewAnime setSelectedCategory={setSelectedCategory} />
      )}
    </div>
  );
}
