import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';

export default function Cart() {
  const { user } = useContext(UserContext);
  const { isLoading, isError, data: cart } = useQuery(['cart'], getCartData);
  console.log(user);
  console.log(cart);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return <div>dd</div>;
}
