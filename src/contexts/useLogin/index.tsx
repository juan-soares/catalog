import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ICredentials {
  email: string;
  password: string;
}

interface IUser {
  nickname: string;
  avatar: string;
}

export function useLogin() {
  const [user, setUser] = useState<IUser>();
  const [isLogged, setIsLogged] = useState(false);


  async function login({ email, password }: ICredentials) {
    const res = await fetch(
      `https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/users?password=${password}&&email=${email}`
    );

    const data = await res.json();
    
    if(!data.length) return;
    
    setUser({nickname: data[0].nickname, avatar: data[0].avatar})    
    
  }

  return { isLogged, user, login };
}
