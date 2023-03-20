import { createContext, useState } from 'react';

export const userContext = createContext();

export function UserContextProvider() {
  const [user, setUser] = useState();
  return (
    <userContext.Provider value={(user, setUser)}>
      {children}
    </userContext.Provider>
  );
}
