import React from 'react';
import styles from '../css/PriceCard.module.css';

export default function PriceCard({ text, price }) {
  return (
    {
      price &&
      <div className={styles.frame}>
        <p className={styles.text}>{text}</p>
        <p className={styles.price}>{`${price.toLocaleString()}원`}</p>
      </div>
    }
  );
}
