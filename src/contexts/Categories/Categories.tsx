import { createContext, useEffect, useState } from "react";
import { IPropsWithChildren } from "../../interfaces";
import { ICategory } from "../../interfaces/ICategory";
import { getData } from "../../utils";

interface ICategoriesContext {
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categories: [],
  setCategories: () => {},
});

export function CategoriesContextProvider({ children }: IPropsWithChildren) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getData("categories", setCategories);
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
