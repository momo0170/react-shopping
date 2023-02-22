import React, { useState } from 'react';
import { registerUser } from '../firebase/Firebase-Auth';
import { auth } from '../firebase/Firebase-Auth';

export default function Register() {
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  const onChangeAccount = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div>
        <span>이메일</span>
        <input type="text" name="email" onChange={onChangeAccount} />
      </div>
      <div>
        <span>비밀번호</span>
        <input
          type="text"
          name="password"
          onChange={(e) => setPerson(onChangeAccount)}
        />
      </div>
      <div>
        <button>취소</button>
        <button onClick={registerUser}>가입</button>
      </div>
    </main>
  );
}
