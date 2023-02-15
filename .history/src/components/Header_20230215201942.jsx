import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styles from '../css/Header.module.css';
export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div>
          <div className={styles.logoAndImage}>
            <img
              className={styles.logoImage}
              src="/images/shopping.png"
              alt="logo"
            />
            <span className={styles.logo}>Shoppy</span>
          </div>
        </div>
        <div className={styles.menu}>
          <button className={styles.cart}>
            <div className={styles.cartIcon}>
              <BsCart2 size="20" />
            </div>
            <span className={styles.cartText}>장바구니</span>
          </button>
          <button className={styles.login}>로그인</button>
        </div>
      </div>
    </header>
  );
}
