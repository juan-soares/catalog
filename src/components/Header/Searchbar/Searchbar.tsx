import { useState } from "react";

export function Searchbar() {
  const [searchedWord, setSearchedWord] = useState("");

  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={({ target: { value } }) => setSearchedWord(value)}
      />
      {searchedWord && (
        <ul>
          <li>{searchedWord}</li>
        </ul>
      )}
    </div>
  );
}
