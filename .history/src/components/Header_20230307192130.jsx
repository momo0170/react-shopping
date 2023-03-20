import React, { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import styles from '../css/Header.module.css';

export default function Header() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  console.log(user);
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
          <button className={styles.login} onClick={goToLogin}>
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
