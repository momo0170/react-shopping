import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

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
        className={`${styles.all} ${clicked && styles.select}`}
        onClick={() => handleClick(filter)}
      >
        {filter}
      </button>
    </>
  );
}
