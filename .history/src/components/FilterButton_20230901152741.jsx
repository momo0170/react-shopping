import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = (filter) => {
    setFilter(!filter);
    setIsClicked(!clicked);
  };
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick}>
        전체
      </button>
    </>
  );
}
