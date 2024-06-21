import { ICategory, ICardInfo, IValue } from "../interfaces";

export async function getData(
  url: string,
  setData:
    | React.Dispatch<React.SetStateAction<ICategory[]>>
    | React.Dispatch<React.SetStateAction<ICardInfo[] | null>>
    | React.Dispatch<React.SetStateAction<[] | null>>
    | React.Dispatch<React.SetStateAction<IValue[]>>
) {
  const res = await fetch(
    `https://catalog-1kpk--3001--802dc1bc.local-credentialless.webcontainer.io/${url}`
  );
  const data = await res.json();

  setData(data);
}
