import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../firebase/Firebase-Auth';

export default function Products() {
  const { user } = useContext(UserContext);
  const { isLoading, isError } = useQuery(['prodcuts'], async () => {
    getData();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return <>{user && <p>{user.email}</p>}</>;
}
