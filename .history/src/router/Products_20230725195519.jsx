import React from 'react';
import Product from '../components/Product';
import userProducts from '../hooks/useProducts';

export default function Products() {
  // const {
  //   isLoading,
  //   isError,
  //   data: products,
  // } = useQuery(['products'], getData, { staleTime: 1000 * 60 }); // 1분 뒤에 stale로 표기됨

  const {
    productsQuery: { isLoading, error, data: products },
  } = userProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }

  return (
    <>
      <ul>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
