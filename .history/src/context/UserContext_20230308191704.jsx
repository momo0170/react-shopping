import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('good');
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
