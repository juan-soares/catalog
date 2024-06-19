import { useState } from "react";
import { ResultList } from "./ResultList";

export function Searchbar() {
  const [searchedValue, setSearchedValue] = useState<string>("");

  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={({ target: { value } }) => setSearchedValue(value)}
      />
      <span>0-</span>
      <div>{searchedValue && <ResultList searchedValue={searchedValue} />}</div>
    </div>
  );
}
