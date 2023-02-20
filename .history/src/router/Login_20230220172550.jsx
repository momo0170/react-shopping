import React from 'react';
import styles from '../css/Login.module.css';

export default function Login() {
  const emailLogin = (e) => {
    e.preventDefault();
    console.log('로그인');
  };
  return (
    <main>
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
          <img src="/images/google-icon.png" className={styles.googleLogo} />
          <span>구글로 로그인</span>
        </div>
        <div>
          <span>아직 회원이 아니신가요?</span>
          <button className={styles.register}>회원가입</button>
        </div>
      </div>
    </main>
  );
}
