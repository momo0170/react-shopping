import React, { useContext } from 'react';
import useProducts from '../hooks/useProducts';
import styles from '../css/DeleteButton.module.css';
import { TiDelete } from 'react-icons/ti';
import { DeleteMode } from '../context/DeleteModeContext';

export default function DeleteButton({ id }) {
  const { deleteProduct } = useProducts();

  const productDelete = () => {
    // 데이터 베이스에서 제품 삭제
    deleteProduct.mutate(id, {
      onSuccess: () => {
        console.log('제품이 성공적으로 제거되었습니다.');
      },
    });
  };

  return (
    <>
      <TiDelete
        className={isActive ? styles.active : styles.inactive}
        onClick={productDelete}
        color="#e20000"
        size="30"
      />
    </>
  );
}
