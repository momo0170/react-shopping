import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../firebase/Firebase-Auth';

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
    <ul>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </ul>
  );
}
