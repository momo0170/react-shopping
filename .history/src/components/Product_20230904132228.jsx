import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Product({ products }) {
  const { id } = products;
  return (
    <>
      {products &&
        products.map((product) => (
          <Link
            className={styles.main}
            to={`product/${id}`}
            state={product}
            key={product.id}
          >
            <img
              src={product.image}
              alt="productproduct."
              className={styles.image}
            />
            <TiDeleteOutline />
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
