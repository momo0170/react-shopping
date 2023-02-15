import React from 'react';
import { BsCart2 } from 'react-icons/bs';

export default function Header() {
  return (
    <>
      <div>Shoppy</div>
      <div>
        <BsCart2 />
        <span>장바구니</span>
      </div>
      <button>로그인</button>
    </>
  );
}
