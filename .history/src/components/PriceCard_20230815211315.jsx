import React from 'react';
import styles from '../css/PriceCard.module.css';

export default function PriceCard({ text, price }) {
  console.log(price);
  return (
    <div className={styles.frame}>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
