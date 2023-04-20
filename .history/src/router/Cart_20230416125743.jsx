import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';

export default function Cart() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    getCartData(user.uid);
  }, []);
  return <div>cart</div>;
}
