import React from 'react';
import useProducts from '../hooks/useProducts';

export default function DeleteButton({ id }) {
  const { deleteProduct } = useProducts();
  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    deleteProduct.mutate(
      { id },
      {
        onSuccess: () => {
          console.log('제품이 성공적으로 제거되었습니다.');
        },
      }
    );
  };
  return <button onClick={productDelete}>삭제</button>;
}
