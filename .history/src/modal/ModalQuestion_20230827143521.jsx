import React from 'react';
import styles from '../css/Modal.module.css';
import { uploadImage } from '../api/imageUpload';
import useProducts from '../hooks/useProducts';

export default function Modal({
  isClick,
  setIsClick,
  setIsSuccess,
  setIsRegister,
  file,
  product,
}) {
  const { addProduct } = useProducts();
  const clickYes = () => {
    setIsRegister(true);

    // 이미지 업로드
    uploadImage(file) //
      .then((url) => {
        // mutate 실행
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              console.log('추가');
              // setIsSuccess(true); // isSuccess가 true가 되면서 화면에 "성공적으로 추가되었다"는 표시를 함.
              setTimeout(() => setIsClick(false), 2000); // 2초 후에 false로 변경 후 화면에서 표시되지 않게 함.
            },
          }
        );
      })
      .then(() => setIsRegister(false));
  };
  return (
    <div className={isClick ? styles.open : styles.close}>
      <span>제품을 등록하시겠습니까?</span>
      <div>
        <button onClick={() => setIsClick(false)}>아니요</button>
        <button onClick={clickYes}>예</button>
      </div>
    </div>
  );
}
