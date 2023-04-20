import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';

export default function Cart() {
  const { user } = useContext(UserContext);
  const {
    isLoading,
    isError,
    data: cart,
  } = useQuery(['cart', user.uid], () => getCartData(user.uid));
  console.log(cart);
  console.log(user.uid);
  return <div>dd</div>;
}
