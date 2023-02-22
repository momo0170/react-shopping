import React, { useState } from 'react';
import { User } from '../firebase/Firebase-Auth';

export default function Register() {
  const user = new User();
  const [person] = useState({
    email: '',
    password: '',
  });
  return (
    <main>
      <div>
        <span>이메일</span>
        <input type="text" />
      </div>
      <div>
        <span>비밀번호</span>
        <input type="text" />
      </div>
      <div>
        <button>취소</button>
        <button onClick={user.registerUser}>가입</button>
      </div>
    </main>
  );
}
