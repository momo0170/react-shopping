import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import uuid4 from 'uuid4';
import DeleteButton from './DeleteButton';

export default function Product({ products }) {
  const { id } = products;
  return (
    <>
      {products &&
        products.map((product) => (
          <div className={styles.frame} key={uuid4()}>
            <Link
              className={styles.main}
              to={`product/${product.id}`}
              state={product}
              key={product.id}
            >
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
            <DeleteButton className={styles.deleteBtn} id={product.id} />
          </div>
        ))}
    </>
  );
}
