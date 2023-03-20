import React, { useContext, useState } from 'react';
import { registerUser } from '../firebase/Firebase-Auth';
import styles from '../css/Register.module.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Register() {
  const a = useContext(UserContext);
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입
  const registerAccount = () => {
    const { email, password } = account;
    registerUser(email, password).then((userdata) => {
      console.log('사용자 데이터');
    });
  };

  const goToHome = () => {
    navigate('/');
  };
  console.log(`이메일 : ${account.email}`);
  console.log(`비밀번호 : ${account.password}`);

  return (
    <main className={styles.main}>
      <div className={styles.email}>
        <span>이메일</span>
        <input type="text" name="email" onChange={onChangeAccount} />
      </div>
      <div className={styles.password}>
        <span>비밀번호</span>
        <input type="password" name="password" onChange={onChangeAccount} />
      </div>
      <div className={styles.btns}>
        <button onClick={registerAccount} className={styles.registerBtn}>
          가입
        </button>
        <button className={styles.cancelBtn}>취소</button>
        <div>
          <span className={styles.homeBtn} onClick={goToHome}>
            메인으로
          </span>
        </div>
      </div>
    </main>
  );
}
