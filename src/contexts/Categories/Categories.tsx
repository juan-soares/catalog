import { createContext, useEffect, useState } from "react";
import { ICardInfo, ICategory, IPropsWithChildren } from "../../interfaces";

interface ICategoriesContext {
  category: ICategory;
  cardsInfo: ICardInfo[];
}

export const CategoriesContext = createContext<ICategoriesContext[]>([
  {
    category: { collection: "", filters: [], id: "", title: "", url: "" },
    cardsInfo: [],
  },
]);

export function CategoriesContextProvider({ children }: IPropsWithChildren) {
  const [categoriesWithData, setCategoriesWithData] = useState<
    ICategoriesContext[]
  >([]);

  const getData = async () => {
    const res = await fetch(
      "https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/categories"
    );
    const data: ICategory[] = await res.json();

    const promises = data.map(async (category) => {
      const res = await fetch(
        `https://catalog-1kpk--3001--dc4d7514.local-credentialless.webcontainer.io/${category.collection}`
      );
      const data: ICardInfo[] = await res.json();

      return { category: category, cardsInfo: data };
    });

    const resolvedPromises = await Promise.all(promises);

    setCategoriesWithData(resolvedPromises);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={categoriesWithData}>
      {children}
    </CategoriesContext.Provider>
  );
}
