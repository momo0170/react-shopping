import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

function change_btn(e) {
  const btns = document.querySelectorAll('.button');
  btns.forEach((btn, i) => {
    if (e.currentTarget === btn) {
      btn.classList.add('select');
    } else {
      btn.classList.remove('select');
    }
  });
}

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  // 버튼을 클릭했을 때
  const handleClick = () => {
    setFilter(filter);
    setIsClicked(!clicked);
  };
  console.log(clicked);
  return (
    <>
      <button
        className={`${
          filter === '전체' ? 'all' : filter === '남성' ? 'man' : 'woman'
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
