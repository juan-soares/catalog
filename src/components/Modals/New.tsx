import { NewAnime } from "./Anime";

interface IProps {
  selectedCategory: string;
  setSelectedCategory: (arg: string) => void;
}

export function ModalsNew({ selectedCategory, setSelectedCategory }: IProps) {
  return (
    <div>
      {selectedCategory === "animes" && (
        <NewAnime setSelectedCategory={setSelectedCategory} />
      )}
    </div>
  );
}
