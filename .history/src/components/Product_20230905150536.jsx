import React, { useContext } from 'react';
import styles from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import uuid4 from 'uuid4';
import DeleteButton from './DeleteButton';

export default function Product({ products }) {
  return (
    <>
      {products &&
        products.map((product) => (
          <>
            {
            const productDelete = () => {
              // 데이터 베이스에서 제품 삭제
              deleteProduct.mutate(id, {
                onSuccess: () => {
                  console.log('제품이 성공적으로 제거되었습니다.');
                },
              });
            };
          }
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
              {/* <DeleteButton id={product.id} /> */}
              <button></button>
            </div>
          </>
        ))}
    </>
  );
}
