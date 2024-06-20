import { ICategory, ICategoryItem } from "../interfaces";

export async function getData(
  url: string,
  setData:
    | React.Dispatch<React.SetStateAction<ICategory[]>>
    | React.Dispatch<React.SetStateAction<ICategoryItem[]>>
) {
  const res = await fetch(
    `https://catalog-1kpk--3001--802dc1bc.local-credentialless.webcontainer.io/${url}`
  );
  const data = await res.json();

  setData(data);
}
