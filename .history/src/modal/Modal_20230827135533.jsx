import React from 'react';
import styles from '../css/Modal.module.css';

export default function Modal({ isClick }) {
  return (
    <div className={isClick ? styles.open : styles.close}>
      <span>This is modal</span>
    </div>
  );
}
