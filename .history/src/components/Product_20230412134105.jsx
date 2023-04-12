import React from 'react';
import styles from '../css/Product.module.css';
export default function Product(props) {
  const { name, category, id, price, image, description, option } =
    props.product;

  console.log(props.product);
  return (
    <main className={styles.main}>
      <img src={image} alt="product-image" />
      <span>{category}</span>
      <span>{name}</span>
      <span>{price}</span>
    </main>
  );
}
