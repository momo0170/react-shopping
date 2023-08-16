import React from 'react';
import CartProduct from '../components/CartProduct';
import PriceCard from '../components/PriceCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa6';
import styles from '../css/Cart.module.css';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;
export default function Cart() {
  const {
    cartProduct: { isLoading, error, data: cart, isError },
  } = useCart();

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
  console.log(cart);
  return (
    <>
      <h1>장바구니</h1>
      <div className={styles.informations}>
        <div className={styles.list}>
          <div className={styles.line}></div>
          {!hasProduct && <p>장바구니에 상품이 없습니다.</p>}
          {hasProduct &&
            cart.map((item) => (
              <li key={item.id}>
                <CartProduct product={item} />
              </li>
            ))}
          <div className={styles.line}></div>
        </div>
        <div className={styles.price}>
          <div className={styles.line}></div>
          <h1>결제 내역</h1>
          <PriceCard text="상품 총액" price={totalPrice} />
          <PriceCard text="배송액" price={SHIPPING} />
          <div className={styles.line}></div>
          <PriceCard
            text="총 가격"
            price={totalPrice && totalPrice + SHIPPING}
          />
        </div>
      </div>
    </>
  );
}
