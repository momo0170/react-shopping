import React from 'react';
import styles from '../css/ModalSuccess.module.css';

export default function ModalSuccess({ isRegister, setIsRegister }) {
  return (
    <div className={isRegister ? styles.open : styles.close}>
      <div className={styles.message}>제품이 성공적으로 등록되었습니다;</div>
      <button className={styles.btn} onClick={() => setIsRegister(false)}>
        확인
      </button>
    </div>
  );
}
