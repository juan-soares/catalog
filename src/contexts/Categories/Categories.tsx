import { createContext, useEffect, useState } from "react";
import { ICategory, IPropsWithChildren } from "../../interfaces";
import { getData } from "../../utils";

interface ICategoriesContext {
  categories: ICategory[];
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categories: [],
});

export function CategoriesContextProvider({ children }: IPropsWithChildren) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getData("categories", setCategories);
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
