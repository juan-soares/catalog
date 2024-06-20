import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { Loginbar } from "./Loginbar/Login";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logotipo." />
      </Link>
      <Searchbar />
      <Loginbar />
      <Navbar />
    </header>
  );
}
