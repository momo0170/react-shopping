import React from 'react';
import styles from '../css/Login.module.css';

export default function Login() {
  return (
    <main>
      <div className={styles.logo}>Shoppy</div>
      <form className={styles.loginForm}>
        <input type="text" className={styles.id} />
        <input type="text" className={styles.password} />
        <button className={styles.loginBtn}>로그인</button>
      </form>
      <button className={styles.googleLoginBtn}>구글로 로그인</button>
    </main>
  );
}
