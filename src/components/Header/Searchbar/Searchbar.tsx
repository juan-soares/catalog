import { useState } from "react";
import { Link } from "react-router-dom";

interface ITitle {
  category: string;
  title: string;
  release: string;
}

export function Searchbar() {
  const [searchedWord, setSearchedWord] = useState("");
  const [searchResults, setSearchResults] = useState<ITitle[]>([]);

  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={({ target: { value } }) => setSearchedWord(value)}
      />
      {searchedWord && !searchResults.length ? (
        <ul>
          <li>Nada encontrado.</li>
        </ul>
      ) : (
        <ul>
          {searchResults.map(({ category, title, release }) => (
            <li key={title}>
              <Link to={`/${category}/${title}`}>
                {`${title} (${release.slice(0, 4)})`}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
