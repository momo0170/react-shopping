import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';

export default function Product({ products }) {
  const { name, category, id, price, image, description, option } = products;
  console.log(products);
  return (
    <>
      {products &&
        products.map((product) => (
          <Link className={styles.main} to={`product/${id}`} state={product}>
            <img
              src={product.image}
              alt="productproduct."
              className={styles.image}
            />
            <span className={styles.category}>[{product.category}]</span>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.price}>
              {product.price.toLocaleString()}원
            </span>
          </Link>
        ))}
    </>
  );
}
