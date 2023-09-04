import React from 'react';
import useProducts from '../hooks/useProducts';

export default function DeleteButton({ id }) {
  const { deleteProduct } = useProducts();
  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    deleteProduct(id);
  };
  return <button onClick={productDelete}>삭제</button>;
}
