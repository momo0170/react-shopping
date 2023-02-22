import React, { useState } from 'react';
import { registerUser } from '../firebase/Firebase-Auth';
import styles from '../css/Regitser.modules.css';

export default function Register() {
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
    const result = window.confirm('가입하시겠습니까?');
    result && registerUser(account.email, account.password);
  };
  console.log(`이메일 : ${account.email}`);
  console.log(`비밀번호 : ${account.password}`);
  return (
    <main>
      <div className={styles.email}>
        <span>이메일</span>
        <input type="text" name="email" onChange={onChangeAccount} />
      </div>
      <div className={styles.password}>
        <span>비밀번호</span>
        <input type="password" name="password" onChange={onChangeAccount} />
      </div>
      <div className={styles.btns}>
        <button>취소</button>
        <button onClick={registerAccount}>가입</button>
      </div>
    </main>
  );
}
