import React from 'react';

export default function FilterButton({ filter, setFilter }) {
  const handleClick = (filter) => {
    setFilter(filter => !filter)
  }
  return (
    <>
      <button className={`${styles.all}}`} onClick={}>
        전체
      </button>
    </>
  );
}
