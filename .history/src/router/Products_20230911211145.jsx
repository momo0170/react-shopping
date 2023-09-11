import React, { useState } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';
import FilterButton from '../components/FilterButton';
import Loading from '../components/Loading';

export default function Products() {
  const filterList = ['전체', '남성', '여성'];
  const [filter, setFilter] = useState('전체');
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  const filterProduct = (products) => {
    // 전체 필터는 바로 리턴
    if (filter === '전체') {
      return products;
    }
    // filter의 값에 따른 필터링
    return products.filter((item) => item.category === filter);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* 필터 */}
      <div className={styles.filterBar}>
        <div className={styles.btns}>
          {filterList.map((filter) => (
            <FilterButton filter={filter} setFilter={setFilter} key={filter} />
          ))}
        </div>
      </div>
      {/* 제품들 */}
      <div className={styles.frame}>
        <ul>
          <Product products={filterProduct(products)} />
        </ul>
      </div>
    </>
  );
}
