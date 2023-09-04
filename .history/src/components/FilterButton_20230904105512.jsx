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
        btn[0].classList.remove(styles.select);
        btn.classList.add(styles.select); // 클래스에 select 추가
      }
    } else {
      btn.classList.remove(styles.select); // 클래스에 select 제거
    }
  });
}

const select = document.getElementsByClassName('select');
function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === 'clicked') {
    event.target.classList.remove('clicked');
  } else {
    for (var i = 0; i < select.length; i++) {
      select[i].classList.remove('clicked');
    }

    event.target.classList.add('clicked');
  }
}

function init() {
  for (var i = 0; i < select.length; i++) {
    select[i].addEventListener('click', handleClick);
  }
}

init();

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
