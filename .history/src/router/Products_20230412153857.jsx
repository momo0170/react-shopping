import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../firebase/Firebase-Auth';
import Product from '../components/Product';
import styles from '../css/Products.module.css';
export default function Products() {
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(['products'], getData);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  console.log(products);
  return (
    <>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
      </ul>
    </>
  );
}
