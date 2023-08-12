import React, { useContext } from 'react';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import CartProduct from '../components/CartProduct';
import styles from '../css/Cart.module.css';

export default function Cart() {
  const { user } = useContext(UserContext);
  const {
    isLoading,
    isError,
    data: cart,
    error,
  } = useQuery(['cart'], () => getCartData(user.uid));

  if (isLoading) {
    <p>loading..</p>;
  }
  if (isError) {
    <p>{error.message}</p>;
  }
  console.log(cart);
  const hasProduct = cart && cart.length > 0; // 1개 이상 있다면
  // const totalPrice =
  //   cart &&
  //   cart.reduce((prev, value) => prev + parseInt(value) * value.quauntity);
  return (
    <>
      <h1>내 장바구니</h1>

      {!hasProduct && <p>장바구니에 상품이 없습니다.</p>}
      {hasProduct &&
        cart.map((item) => (
          <li key={item.id}>
            <CartProduct product={item} />
          </li>
        ))}
      <div>
        <PriceCard text="상품 총액" price={totalPrice} />
      </div>
    </>
  );
}
