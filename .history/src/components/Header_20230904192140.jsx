import React, { useContext, useEffect } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { RiEditBoxLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../css/Header.module.css';
import { logout, checkLogin } from '../firebase/Firebase-Auth';
import CartStatus from './CartStatus';
import { DeleteMode } from '../context/DeleteModeContext';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { isActive, setIsActive } = useContext(DeleteMode);

  console.log(isActive);
  const goToEdit = () => {
    navigate('/edit');
  };
  const goToCart = () => {
    navigate('/cart');
  };
  const goToHome = () => {
    navigate('/');
  };
  // 로그인
  const goToLogin = () => {
    navigate('/login');
  };
  // 로그아웃
  const goToLogout = () => {
    logout();
  };
  // 로그인 감지
  useEffect(() => {
    checkLogin((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <div>
          <div className={styles.logoAndImage} onClick={goToHome}>
            <img
              className={styles.logoImage}
              src="/images/shopping.png"
              alt="logo"
            />
            <span className={styles.logo}>Shoppy</span>
          </div>
        </div>
        <div className={styles.menu}>
          {/* 등록 */}
          {user ? (
            user.isAdmin ? (
              <>
                <button className={styles.edit} onClick={goToEdit}>
                  <div className={styles.editIcon}>
                    <RiEditBoxLine size="20" />
                  </div>
                  <span className={styles.editText}>등록</span>
                </button>
                <button onClick={() => setIsActive(!isActive)}>
                  <TiDeleteOutline />
                  <span>삭제</span>
                </button>
              </>
            ) : null
          ) : null}

          {/* 장바구니 */}
          {user && (
            <button className={styles.cart} onClick={goToCart}>
              <div className={styles.cartIcon}>
                <BsCart2 size="20" />
              </div>
              <span className={styles.cartText}>
                <span>장바구니</span>
              </span>
              <CartStatus />
            </button>
          )}
          {/* 로그인 버튼 */}
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
