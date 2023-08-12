import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';

export default function CartStatus() {
  const { uid } = UserContext();
  const { data: products } = useQuery(['carts'], getCartData);
  console.log(products);
  return <div>{products && <p>{products.length}</p>}</div>;
}
