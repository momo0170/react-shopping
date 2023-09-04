import React from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import uuid4 from 'uuid4';
import { removeData } from '../firebase/Firebase-Auth';

export default function Product({ products }) {
  const { id } = products;
  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    removeData();
  };
  console.log(id);
  return (
    <>
      {products &&
        products.map((product) => (
          <div className={styles.frame} key={uuid4()}>
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
            <TiDelete
              className={styles.deleteBtn}
              onClick={productDelete}
              color="#e20000"
            />
          </div>
        ))}
    </>
  );
}
