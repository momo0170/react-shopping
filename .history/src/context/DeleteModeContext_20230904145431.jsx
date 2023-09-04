import React, { createContext, useState } from 'react';

export const DeleteMode = createContext();
export function DeleteModeContext({ children }) {
  const [isActive, setIsActive] = useState(false);
  return <div></div>;
}
