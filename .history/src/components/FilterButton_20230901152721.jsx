import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = (filter) => {
    setFilter((prev) => !prev);
    setIsClicked((prev) => !prev);
  };
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick(filter)}>
        전체
      </button>
    </>
  );
}
