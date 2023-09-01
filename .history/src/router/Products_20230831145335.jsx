import React from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';

export default function Products() {
  const filterKeyword = ['All', '남성', '여성']; // 필터링 키워드
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>에러</p>;
  }

  return (
    <div className={styles.frame}>
      <div>
        <button>남성</button>
        <button>여성</button>
      </div>
      <ul>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
