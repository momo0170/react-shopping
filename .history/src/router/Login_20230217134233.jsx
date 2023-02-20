import React from 'react';
import styles from '../css/Login.module.css'

export default function Login() {
  return (
    <main>
      <div className={styles.}>Shoppy</div>
      <form>
        <input type="text" />
        <input type="text" />
        <button>로그인</button>
      </form>
      <button>구글로 로그인</button>
    </main>
  );
}
