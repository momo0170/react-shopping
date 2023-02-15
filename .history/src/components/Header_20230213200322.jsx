import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styles from '../css/Header.module.css';
export default function Header() {
  return (
    <>
      <div className={styles.logo}>Shoppy</div>
      <div>
        <BsCart2 />
        <span>장바구니</span>
      </div>
      <button className={styles.login}>로그인</button>
    </>
  );
}
