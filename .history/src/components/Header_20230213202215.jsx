import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styles from '../css/Header.module.css';
export default function Header() {
  return (
    <header>
      <div className={styles.logo}>Shoppy</div>
      <div className={styles.menu}>
        <div className={styles.cart}>
          <BsCart2 />
          <span className={styles.cart - text}>장바구니</span>
        </div>
        <button className={styles.login}>로그인</button>
      </div>
    </header>
  );
}
