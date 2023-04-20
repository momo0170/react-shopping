import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';

export default function Cart() {
  const { user } = useContext(UserContext);
  user &&
    useEffect(() => {
      getCartData(user.uid) //
        .then((data) => console.log(data));
    }, []);
  console.log(user);
  return <div>cart</div>;
}
