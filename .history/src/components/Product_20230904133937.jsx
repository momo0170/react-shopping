import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';

export default function Product({ products }) {
  const { id } = products;
  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    console.log('삭제');
  };
  return (
    <>
      {products &&
        products.map((product) => (
          <>
            <TiDelete
              className={styles.deleteBtn}
              color="#e20000"
              onClick={productDelete}
            />
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
              <span className={styles.category}>[{product.category}]</span>
              <span className={styles.name}>{product.name}</span>
              <span className={styles.price}>
                {product.price.toLocaleString()}원
              </span>
            </Link>
          </>
        ))}
    </>
  );
}
