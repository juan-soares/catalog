import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useEffect } from "react";

export function Loginbar() {
  const { user, logout, getUserLocalStorage } = useAuth();

  useEffect(() => getUserLocalStorage(), []);

  if (!user) {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
  } else {
    const { nickname } = user;

    return (
      <div>
        <Link to="/adm">
          <img src="" alt="Ícone de usuário logado." />
          <span>{nickname}</span>
        </Link>
        <button onClick={logout}>Sair</button>
      </div>
    );
  }
}
