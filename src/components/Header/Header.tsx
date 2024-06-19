import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { Loginbar } from "./Loginbar/Login";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logotipo." />
      </Link>
      <Searchbar />
      <Loginbar />
    </header>
  );
}
