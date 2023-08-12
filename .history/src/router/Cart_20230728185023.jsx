import React, { useContext } from 'react';
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
    error,
  } = useQuery(['cart'], () => () => getCartData(user.uid));

  if (isLoading) {
    <p>loading..</p>;
  }
  if (isError) {
    <p>{error.message}</p>;
  }
  const hasProduct = cart && cart.length > 0; // 1개 이상 있다면
  return (
    <>
      {/* {!hasProduct && <p>장바구니에 상품이 없습니다.</p>} */}
      {hasProduct &&
        cart.map((item) => (
          <li key={item.id}>
            <CartProduct product={item} />
          </li>
        ))}
    </>
  );
}
