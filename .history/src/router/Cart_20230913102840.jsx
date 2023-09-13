import React from 'react';
import CartProduct from '../components/CartProduct';
import PriceCard from '../components/PriceCard';
import styles from '../css/Cart.module.css';
import useCart from '../hooks/useCart';
import Payment from '../components/Payment';
import uuid4 from 'uuid4';
import { useNavigate } from 'react-router-dom';

const SHIPPING = 3000;
export default function Cart() {
  const navigate = useNavigate();
  const goToShopping = () => {
    navigate('/');
  };
  const {
    cartProduct: { data: cart },
  } = useCart();

  const hasProduct = cart && cart.length > 0; // 1개 이상 있다면
  const totalPrice =
    cart &&
    cart.reduce((prev, value) => prev + value.price * value.quantity, 0);

  return (
    cart && (
      <>
        <div className={styles.informations}>
          <div className={styles.list}>
            <h1>장바구니</h1>
            <div className={styles.lineFirst}></div>
            {!hasProduct && (
              <div className={styles.noProduct}>
                <p>장바구니에 상품이 없습니다.</p>
                <button onClick={goToShopping}>쇼핑하러 가기</button>
              </div>
            )}
            {hasProduct &&
              cart.map((item) => (
                <li key={uuid4()}>
                  <CartProduct product={item} />
                </li>
              ))}
            <div className={styles.lineLast}></div>
          </div>

          {/* 결제 내역 */}
          <div className={styles.price}>
            <div className={styles.lineFirst}></div>
            <h1>결제 내역</h1>
            <div>
              <PriceCard text="상품 총액" price={totalPrice} />
              <PriceCard text="배송액" price={SHIPPING} />
              <div className={styles.lineLast}></div>
              <PriceCard
                text="총 가격"
                price={totalPrice && totalPrice + SHIPPING}
              />
              <Payment />
            </div>
          </div>
        </div>
      </>
    )
  );
}
