import { createContext, useEffect, useState } from 'react';
import { checkLogin } from '../firebase/Firebase-Auth';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, uid: user && user.uid }}>
      {children}
    </UserContext.Provider>
  );
}
