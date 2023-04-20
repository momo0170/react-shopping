import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import CartProduct from '../components/CartProduct';

export default function Cart() {
  const { user } = useContext(UserContext);
  const {
    isLoading,
    isError,
    data: cart,
  } = useQuery(['cart', user.uid], () => getCartData(user.uid), {
    enabled: !!user.uid,
  });

  if (isLoading) {
    <p>loading..</p>;
  }
  if (isError) {
    <p>error</p>;
  }
  console.log(cart);
  return (
    <>
      {cart &&
        cart.map((item) => (
          <li key={item.id}>
            <CartProduct product={item} />
          </li>
        ))}
    </>
  );
}
