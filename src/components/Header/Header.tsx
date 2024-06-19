import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logotipo." />
      </Link>
      <Searchbar />
    </header>
  );
}
