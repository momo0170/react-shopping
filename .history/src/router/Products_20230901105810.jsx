import React, { useState } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';

export default function Products() {
  // const filterKeywords = ['모두', '남성', '여성']; // 필터링 키워드
  const [filter, setFilter] = useState('모두');
  const [toggle, setToggle] = useState(false);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>에러</p>;
  }
  console.log(filter);
  console.log(products);

  return (
    <>
      <div>
        <button onClick={() => setFilter('남성')}>남성</button>
        <button onClick={() => setFilter('여성')}>여성</button>
      </div>
      <div className={styles.frame}>
        <ul>
          {filter === '모두' ?=
            ? products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : products.filter((product) => product.category === filter)}
        </ul>
      </div>
    </>
  );
}
