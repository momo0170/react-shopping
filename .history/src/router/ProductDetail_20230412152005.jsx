import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
export default function ProductDetail() {
  const location = useLocation();
  console.log(location.state);
  const { category, description, id, image, name, option, price } =
    location.state;
  return (
    <main className={styles.main}>
      <img src={image} alt="product-image" />
      <section>
        <div>{category}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </section>
    </main>
  );
}
