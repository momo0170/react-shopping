import React, { useState } from 'react';
import { User } from '../firebase/Firebase-Auth';

export default function Register() {
  const user = new User();
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });
  const registerUser = () => {
    user.registerUser(person.email, person.password);
  };
  console.log(`이메일 : ${person.email}`);
  console.log(`비밀번호 : ${person.password}`);
  return (
    <main>
      <div>
        <span>이메일</span>
        <input
          type="text"
          onChange={(e) =>
            setPerson(() => ({ ...person, email: e.target.value }))
          }
        />
      </div>
      <div>
        <span>비밀번호</span>
        <input
          type="text"
          onChange={(e) =>
            setPerson(() => ({ ...person, password: e.target.value }))
          }
        />
      </div>
      <div>
        <button>취소</button>
        <button onClick={registerUser}>가입</button>
      </div>
    </main>
  );
}
