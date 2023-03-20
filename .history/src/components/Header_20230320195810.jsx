import React, { useContext, useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../css/Header.module.css';
import { logout, checkLogin } from '../firebase/Firebase-Auth';
import {} from 'firebase/auth';
export default function Header() {
  // const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // 로그인
  const goToLogin = () => {
    navigate('/login');
  };
  // 로그아웃
  const goToLogout = () => {
    logout().then(() => setUser(null));
  };
  // 로그인 감지
  useEffect(() => {
    checkLogin((user) => {
      // setIsLogin((prev) => !prev);
      console.log(user);
      setUser(user); // 로그인된 사용자가 있다면 user에 저장
    });
  }, []);

  console.log(user);
  user && console.log('ㅇㅇ');

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
          {user ? (
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
