import { createContext, useState } from "react";
import { IPropsWithChildren, IUser } from "../../interfaces";

interface IUserContext {
  user: null | IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => null,
});

export function UserContextProvider({ children }: IPropsWithChildren) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
