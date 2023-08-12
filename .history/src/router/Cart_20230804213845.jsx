import React, { useContext } from 'react';
import CartProduct from '../components/CartProduct';
import PriceCard from '../components/PriceCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa6';
import styles from '../css/Cart.module.css';
import { useQuery } from '@tanstack/react-query';
import { UserContext } from '../context/UserContext';

const SHIPPING = 3000;
export default function Cart() {
  const { user } = useContext(UserContext);
  // const {
  //   cartProduct: { isLoading, error, data: cart, isError },
  // } = useCart();

  // query에서 데이터를 받아옴
  const cartProduct = useQuery(['cart'], () => getCartData(user.uid));
  console.log(cart);

  if (isLoading) {
    <p>loading..</p>;
  }

  if (isError) {
    <p>{error.message}</p>;
  }
  const hasProduct = cart && cart.length > 0; // 1개 이상 있다면
  const totalPrice =
    cart &&
    cart.reduce((prev, value) => prev + value.price * value.quantity, 0);

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
      <div className={styles.line}></div>
      <div className={styles.price}>
        <PriceCard text="상품 총액" price={totalPrice} />
        <AiOutlinePlus />
        <PriceCard text="배송액" price={SHIPPING} />
        <FaEquals />
        <PriceCard text="총 가격" price={totalPrice + SHIPPING} />
      </div>
    </>
  );
}
