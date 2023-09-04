import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

function change_btn(e) {
  // button 클래스를 가진 모든 요소들
  const btns = document.querySelectorAll('.button');
  btns.forEach((btn, i) => {
    // 누른 버튼과 같은 것이라면
    if (e.currentTarget === btn) {
      btn.classList.add(styles.select); // 클래스에 select 추가
    } else {
      btn.classList.remove(styles.select); // 클래스에 select 제거
    }
  });
}

export default function FilterButton({ filter, setFilter }) {
  // const [clicked, setIsClicked] = useState(false);

  // 버튼을 클릭했을 때
  const handleClick = () => {
    setFilter(filter);
    // setIsClicked(!clicked);
  };

  return (
    <>
      <button
        className={`${
          filter === '전체'
            ? `${styles.all} ${styles.select}`
            : filter === '남성'
            ? styles.man
            : styles.woman
        } button`}
        onClick={(e) => {
          handleClick(filter);
          change_btn(e);
        }}
      >
        {filter}
      </button>
    </>
  );
}
