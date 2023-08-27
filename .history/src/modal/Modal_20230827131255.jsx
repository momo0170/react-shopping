import React from 'react';
import styles from '../css/Modal.module.css';

export default function Modal({ isOpen }) {
  return (
    <div className={isOpen ? styles.open : styles.close}>This is modal</div>
  );
}
