import React from 'react';

export default function DeleteButton() {
  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    removeData();
  };
  return <button onClick={productDelete}>삭제</button>;
}
