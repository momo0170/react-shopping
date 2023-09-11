import React from 'react';
import styles from '../css/CartStatus.module.css';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartProduct: { data: products },
  } = useCart();
  console.log(products);
  return (
    <div className={styles.frame}>
      {products && (
        <div>
          <div className={styles.number}>{products.length}</div>
        </div>
      )}
    </div>
  );
}
