import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, uid: user && user.uid }}>
      {children}
    </UserContext.Provider>
  );
}
