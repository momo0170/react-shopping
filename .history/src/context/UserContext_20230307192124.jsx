import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('dd');
  return (
    <userContext.Provider value={(user, setUser)}>
      {children}
    </userContext.Provider>
  );
}
