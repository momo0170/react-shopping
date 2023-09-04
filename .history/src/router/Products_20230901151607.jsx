import React, { useState } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';

export default function Products() {
  const [clicked, isClicked] = useState();
  const filterList = ['all', 'man', 'woman'];
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
        <div className={styles.btns}>{}</div>
      </div>
      <div className={styles.frame}>
        <ul>
          <Product products={filterProduct(products)} />
        </ul>
      </div>
    </>
  );
}
