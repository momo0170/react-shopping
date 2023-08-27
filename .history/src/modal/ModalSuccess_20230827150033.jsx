import React from 'react';

export default function ModalSuccess({ setIsRegister }) {
  const closeWindow = () => {
    setIsRegister(false);
  };
  return (
    <>
      <div>제품이 성공적으로 등록되었습니다;</div>
      <button onClick={closeWindow}>확인</button>
    </>
  );
}
