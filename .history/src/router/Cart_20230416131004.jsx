import React, { useContext, useEffect } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';

export default function Cart() {
  const { user } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    user &&
      getCartData(user.uid) //
        .then((data) => console.log(data));
  }, []);
  return <div>cart</div>;
}
