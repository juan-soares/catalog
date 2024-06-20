import { createContext, useState } from "react";
import { IUser } from "../../interfaces";

interface IUserContext {
  user: null | IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface IProps {
  children: JSX.Element;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }: IProps) {
  const [user, setUser] = useState<null | IUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
