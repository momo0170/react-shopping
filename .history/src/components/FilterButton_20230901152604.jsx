import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = (filter) => {
    setFilter((filter) => !filter);
    setIsClicked((click) => !click);
  };
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick(filter)}>
        전체
      </button>
    </>
  );
}
