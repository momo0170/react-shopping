import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCartData } from '../firebase/Firebase-Auth';

export default function CartStatus() {
  const { data: products } = useQuery(['carts'], getCartData);
  return <div>{products && <p>{products.length}</p>}</div>;
}
