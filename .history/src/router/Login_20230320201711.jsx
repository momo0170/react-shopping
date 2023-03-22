import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../css/Login.module.css';
import { loginUser, googleLogin } from '../firebase/Firebase-Auth';

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [emailAccount, setEmailAccount] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  // 이메일로 로그인
  const loginWithEmail = (e) => {
    e.preventDefault();
    const { email, password } = emailAccount;
    loginUser(email, password) //
      .then((user) => {
        setUser(user);
      })
      .then(() => navigate('/'));
  };

  // 구글로 로그인
  const loginWithGoogle = () => {
    googleLogin().then(() => navigate('/'));
  };

  // 입력한 계정 정보를 저장
  const onChangeAccount = (e) => {
    setEmailAccount({
      ...emailAccount,
      [e.target.name]: e.target.value,
    });
  };
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <main className={styles.main}>
      <div className={styles.logo}>Shoppy</div>
      <div className={styles.frame}>
        <form className={styles.loginForm} onSubmit={loginWithEmail}>
          <input
            type="text"
            className={styles.id}
            placeholder="이메일"
            name="email"
            onChange={onChangeAccount}
          />
          <input
            type="password"
            className={styles.password}
            placeholder="비밀번호"
            name="password"
            onChange={onChangeAccount}
          />
          <button className={styles.loginBtn}>로그인</button>
        </form>
        <div className={styles.googleLoginBtn} onClick={loginWithGoogle}>
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
