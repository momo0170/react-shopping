import React, { createContext, useState } from 'react';

export const DeleteMode = createContext(false);

export function DeleteModeContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <DeleteMode.Provider value={{ isActive, setIsActive }}>
      {children}
    </DeleteMode.Provider>
  );
}
