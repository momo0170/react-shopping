import React, { createContext, useState } from 'react';

export const DeleteMode = createContext();
export function DeleteModeContext() {
  const [isActive, setIsActive] = useState(false);
  return <div></div>;
}
