import { useContext, useState } from "react";
import { UserContext } from "../../contexts";
import { ICredentials } from "../../interfaces";
import { getUser } from "../../../json-db/api";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const { user, setUser } = useContext(UserContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const redirect = useNavigate();

  function getUserLocalStorage() {
    const localStorageHasData = localStorage.getItem("user");
    if (!localStorageHasData) return;
    const user = JSON.parse(localStorageHasData);
    setUser(user);
  }

  async function login(credentials: ICredentials) {
    const user = await getUser(credentials);

    if (!user) {
      return setLoginFailed(true);
    }
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    redirect("/");
  }

  async function logout() {
    const confirmation = window.confirm("Deseja realmente sair?");

    if (!confirmation) return;

    setUser(null);
    localStorage.removeItem("user");
  }

  return { user, login, loginFailed, logout, getUserLocalStorage };
}
