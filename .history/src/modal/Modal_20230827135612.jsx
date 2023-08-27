import React from 'react';
import styles from '../css/Modal.module.css';

export default function Modal({ isClick }) {
  return (
    <div className={isClick ? styles.open : styles.close}>
      <span>제품을 등록하시겠습니까?</span>
      <div>
        <button>아니요</button>
        <button>예</button>
      </div>
    </div>
  );
}
