import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { Login } from "./Login";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <Searchbar />
      <Login />
      <Navbar />
    </header>
  );
}
