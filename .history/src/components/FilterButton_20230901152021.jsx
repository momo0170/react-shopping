import React from 'react';

export default function FilterButton({ filter, setFilter }) {
  return (
    <>
      <button className={`${styles.all}}`} onClick={() => setFilter(filter)}>
        전체
      </button>
    </>
  );
}
