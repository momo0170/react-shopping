import React, { useState } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import styles from '../css/Products.module.css';
import FilterButton from '../components/FilterButton';

export default function Products() {
  const filterList = ['전체', '남성', '여성'];
  const [filter, setFilter] = useState('전체');
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const filterProduct = (products) => {
    // 전체 필터는 바로 리턴
    if (filter === '전체') {
      return products;
    }
    // filter의 값에 따른 필터링
    const result = products.filter((item) => {
      return item.category === filter;
    });
    console.log(result);
    return result;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에 값 저장
    const initialFilter = window.localStorage.setItem('initial', '전체');
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>에러</p>;
  }
  console.log(`현재 필터 : ${filter}`);

  return (
    <>
      {/* 필터 */}
      <div className={styles.filterBar}>
        <div className={styles.btns}>
          {filterList.map((filter) => (
            <FilterButton
              filter={filter}
              setFilter={setFilter}
              key={filter}
              initial={initialFilter}
            />
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
