import React from 'react';
import styles from '../css/PriceCard.module.css';

export default function PriceCard({ text, price }) {
  return (
    <div className={styles.frame}>
      <p>{text}</p>
      <p>{price}</p>
    </div>
  );
}
