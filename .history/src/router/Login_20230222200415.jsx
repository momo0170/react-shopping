import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const emailLogin = (e) => {
    e.preventDefault();
    console.log('로그인');
  };

  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <main className={styles.main}>
      <div className={styles.logo}>Shoppy</div>
      <div className={styles.frame}>
        <form className={styles.loginForm} onSubmit={emailLogin}>
          <input type="text" className={styles.id} placeholder="이메일" />
          <input
            type="text"
            className={styles.password}
            placeholder="비밀번호"
          />
          <button className={styles.loginBtn}>로그인</button>
        </form>
        <div className={styles.googleLoginBtn}>
          <img
            src="/images/google-icon.png"
            className={styles.googleLogo}
            alt="구글 로고"
          />
          <span>구글로 로그인</span>
        </div>
        <div className={styles.registerSection}>
          <button className={styles.register} onClick={goToRegister}>
            회원가입
          </button>
        </div>
      </div>
    </main>
  );
}
