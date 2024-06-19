import { ICredentials, IUser } from "../src/interfaces";

interface IUserAPI {
  id: string;
  password: string;
  email: string;
  nickname: string;
}

interface ICategoryAPI {
  url: string;
}

export async function getUser({ email, password }: ICredentials) {
  const res = await fetch(
    "https://catalog-1kpk--3001--802dc1bc.local-credentialless.webcontainer.io/users"
  );
  const data = await res.json();

  const userAPI: IUserAPI = data.find(
    (user: IUserAPI) => user.password === password && user.email === email
  );

  const user: IUser | null = userAPI
    ? { id: userAPI.id, nickname: userAPI.nickname }
    : null;

  return user;
}

export async function getSearch(searchedValue: string) {
  const res = await fetch(
    "https://catalog-1kpk--5173--802dc1bc.local-credentialless.webcontainer.io/categories"
  );

  const categories = await res.json();

  let results = [];

  categories.map(({ url }: ICategoryAPI) => {
    const res = await fetch(
      `https://catalog-1kpk--5173--802dc1bc.local-credentialless.webcontainer.io/${url}`
    );

    const categories = await res.json();
  });
}
