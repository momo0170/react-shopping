import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
