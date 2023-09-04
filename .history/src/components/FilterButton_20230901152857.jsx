import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = (filter) => {
    setFilter(!filter);
    setIsClicked(!clicked);
  };
  console.log(filter);
  console.log(clicked);
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick}>
        {filter}
      </button>
    </>
  );
}
