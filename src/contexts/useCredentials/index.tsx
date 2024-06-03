import { useState } from "react";

interface ICredentials {
  email: string;
  password: string;
}

interface IUser {
  nickname: string;
  avatar: string;
}

export function useCredentials() {
  const [user, setUser] = useState<IUser>();

  async function login({ email, password }: ICredentials) {
    const res = await fetch(
      `https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/users?email=${email}&&password=${password}`
    );

    const data = await res.json();

    setUser(data);

    console.log(data);
  }

  return { user, login };
}
