import React, { useState } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';

export default function Products() {
  // const filterKeywords = ['모두', '남성', '여성']; // 필터링 키워드
  const [filter, setFilter] = useState('모두');
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>에러</p>;
  }

  const filterProduct = (products) => {
    if (filter === '모두') {
      return products;
    }
    const result = products.filter((item) => {
      return item.category === filter;
    });
    console.log(result);
    return result;
  };

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.btns}>
          <button
            className={`${styles.man} ${filter ? styles.select : ''}`}
            onClick={() => setFilter('남성')}
          >
            남성
          </button>
          <button
            className={`${styles.woman} ${filter ? styles.select : ''}`}
            onClick={() => setFilter('여성')}
          >
            여성
          </button>
          <button
            className={`${styles.all} ${filter ? styles.select : ''}`}
            onClick={() => setFilter('모두')}
          >
            전체
          </button>
        </div>
      </div>
      <div className={styles.frame}>
        <ul>
          <Product products={filterProduct(products)} />
        </ul>
      </div>
    </>
  );
}
