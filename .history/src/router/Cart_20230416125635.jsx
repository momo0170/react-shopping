import React, { useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';

export default function Cart() {
  useEffect(() => {
    getCartData();
  }, []);
  return <div>cart</div>;
}
