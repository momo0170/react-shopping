import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Products() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div>모든 제품</div>
      {user && <span>{user.email}</span>}
    </>
  );
}
