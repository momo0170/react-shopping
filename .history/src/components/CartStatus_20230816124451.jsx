import React from 'react';
import styles from '../css/CartStatus.module.css';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartProduct: { data: products },
  } = useCart();

  return <>{products && <p className={styles.number}>{products.length}</p>}</>;
}
