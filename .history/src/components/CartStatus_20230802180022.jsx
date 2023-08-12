import React from 'react';
import styles from '../css/CartStatus.module.css';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartProduct: { data: products },
  } = useCart();

  console.log(products);
  console.log(products.length);

  return (
    <div className="relative">
      {products && (
        <p clas sName={styles.number}>
          {products.length}
        </p>
      )}
    </div>
  );
}
