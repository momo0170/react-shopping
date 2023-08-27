import React from 'react';
import styles from '../css/ModalSuccess.module.css';
export default function ModalSuccess({ setIsRegister }) {
  return (
    <div>
      <div className={styles.message}>제품이 성공적으로 등록되었습니다;</div>
      <button onClick={() => setIsRegister(false)}>확인</button>
    </div>
  );
}
