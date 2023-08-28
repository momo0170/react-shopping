import React from 'react';
import styles from '../css/ModalQuestion.module.css';
import { uploadImage } from '../api/imageUpload';
import useProducts from '../hooks/useProducts';

export default function Modal({
  isClick,
  setIsClick,
  setIsRegister,
  file,
  product,
}) {
  const { addProduct } = useProducts();
  const clickYes = () => {
    // 이미지 업로드
    uploadImage(file) //
      .then((url) => {
        // mutate 실행
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              console.log('추가');
              setIsClick(false);
            },
          }
        );
      })
      .then(() => {
        setIsRegister(true);
      }); // true를 만ㄷ르어서 ModalSuccess 컴포넌트 트리거
  };
  return (
    <div>
      <div className={`${isClick ? styles.open : styles.close}`}>
        <span className={styles.question}>제품을 등록하시겠습니까?</span>
        <div className={styles.buttons}>
          <button onClick={() => setIsClick(false)} className={styles.no}>
            아니요
          </button>
          <button onClick={clickYes} className={styles.yes}>
            예
          </button>
        </div>
      </div>
    </div>
  );
}
