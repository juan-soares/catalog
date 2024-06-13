import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces";

interface ICredentials {
  email: string;
  password: string;
}

export function useAuth() {
  const { setUser } = useContext(UserContext);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  const navigate = useNavigate();

  async function login({ email, password }: ICredentials) {
    const res = await fetch(
      `https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/users?password=${password}&&email=${email}`
    );

    const data = await res.json();

    if (!data.length) {
      setIsUnauthorized(true);
      return;
    }

    const userInfo: IUser = {
      nickname: data[0].nickname,
      avatar: data[0].avatar,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);

    navigate("/");
  }

  async function logout() {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  return { isUnauthorized, login, logout };
}
