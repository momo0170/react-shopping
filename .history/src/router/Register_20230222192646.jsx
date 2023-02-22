import React, { useState } from 'react';
import { registerUser } from '../firebase/Firebase-Auth';

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
    registerUser(account.email, account.password);
    account.email && account.email = ''
  };
  console.log(`이메일 : ${account.email}`);
  console.log(`비밀번호 : ${account.password}`);
  return (
    <main>
      <div>
        <span>이메일</span>
        <input type="text" name="email" onChange={onChangeAccount} />
      </div>
      <div>
        <span>비밀번호</span>
        <input type="text" name="password" onChange={onChangeAccount} />
      </div>
      <div>
        <button>취소</button>
        <button onClick={registerAccount}>가입</button>
      </div>
    </main>
  );
}
