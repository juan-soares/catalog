import { createContext, useState } from "react";
import { IPropsWithChildren } from "../../interfaces";

export const UserContext = createContext("oi");

export function UserContextProvider({ children }: IPropsWithChildren) {
  const [usert, setUser] = useState("oii");

  return <UserContext.Provider value={usert}>{children}</UserContext.Provider>;
}
