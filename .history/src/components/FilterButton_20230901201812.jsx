import React, { useState } from 'react';
import styles from '../css/FilterButton.module.css';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  // 버튼을 클릭했을 때
  const handleClick = (filter) => {
    setFilter(filter);
    setIsClicked(!clicked);
  };
  console.log(`클릭이 되었는가? ${clicked}`);
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick}>
        {filter}
      </button>
    </>
  );
}
