import React, { useContext, useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../css/Header.module.css';
import { logout, auth } from '../firebase/Firebase-Auth';
import { onAuthStateChanged } from 'firebase/auth';
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  // 로그아웃
  const goToLogout = () => {
    logout().then(() => {
      setUser({});
      setIsLogin((prev) => !prev);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('로그인된 상태입니다.');
        setIsLogin(!isLogin);
      } else console.log('로그아웃된 상태입니다.');
    });
  }, []);

  console.log(user);
  console.log(isLogin);
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
          {isLogin ? (
            <button className={styles.login} onClick={goToLogout}>
              로그아웃
            </button>
          ) : (
            <button className={styles.login} onClick={goToLogin}>
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
