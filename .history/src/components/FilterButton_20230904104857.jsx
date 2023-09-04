import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

function change_btn(e) {
  // button 클래스를 가진 모든 요소들
  const btns = document.querySelectorAll('.button');
  // 각 버튼을 순회
  btns.forEach((btn, i) => {
    /// 이벤트가 발생한 버튼과 타겟 버튼이 같다면
    if (e.currentTarget === btn) {
      if (i !== 0) {
        btn[0].classList.remove('select');
        e.currentTarget.classList.add('select'); // 클래스에 select 추가
      }
    } else {
      btn.classList.remove('select'); // 클래스에 select 제거
    }
  });
}

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  let initialFilter = window.localStorage.getItem('initial');
  console.log(initialFilter);
  // 버튼을 클릭했을 때
  const handleClick = () => {
    setFilter(filter);
    setIsClicked(!clicked);
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
