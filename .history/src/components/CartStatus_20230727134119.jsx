import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';

export default function CartStatus() {
  const { user } = useContext(UserContext);
  const { data: products } = useQuery(['cart'], () => getCartData(user.uid));
  console.log(products);
  console.log(uid);
  return <div>{products && <p>{products.length}</p>}</div>;
}
