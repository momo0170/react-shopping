import React, { useContext, useEffect } from 'react';
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
    logout();
  };
  // 로그인 감지
  useEffect(() => {
    checkLogin((user) => {
      setUser(user);
    });
  }, []);

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
          {/* 편집 */}
          {user ? user.isAdmin ? <p>관리자</p> : <p>일반</p> : null}
          {/* 장바구니 */}
          <button className={styles.cart}>
            <div className={styles.cartIcon}>
              <BsCart2 size="20" />
            </div>
            <span className={styles.cartText}>장바구니</span>
          </button>
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
