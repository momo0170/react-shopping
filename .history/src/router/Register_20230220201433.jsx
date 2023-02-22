import React, { useState } from 'react';
import { User } from '../firebase/Firebase-Auth';

export default function Register() {
  const user = new User();
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  console.log(`email : ${person.email}`);
  console.log(`email : ${person.password}`);
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
        <button onClick={user.registerUser(person.email, person.password)}>
          가입
        </button>
      </div>
    </main>
  );
}
