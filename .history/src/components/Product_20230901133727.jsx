import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { name, category, id, price, image, description, option } =
    props.product;
  return (
    {products.map(item => <>
    <Link className={styles.main} to={`product/${id}`} state={props.product}>
      <img src={image} alt="product-image" className={styles.image} />
      <span className={styles.category}>[{category}]</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price.toLocaleString()}원</span>
    </Link>
    </>)}
    
  );
}
