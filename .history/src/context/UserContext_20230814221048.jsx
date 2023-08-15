import { createContext, useEffect, useState } from 'react';
import { checkLogin } from '../firebase/Firebase-Auth';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  // 로그인 감지
  useEffect(() => {
    checkLogin((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
