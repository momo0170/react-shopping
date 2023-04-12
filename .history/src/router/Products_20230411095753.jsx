import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const { user } = useContext(UserContext);
  const { isLoading, isError } = useQuery(['prodcuts'], () => {});

  return <>{user && <p>{user.email}</p>}</>;
}
