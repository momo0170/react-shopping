import React from 'react';

export default function FilterButton({ filter, setFilter }) {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = (filter) => {
    setFilter((filter) => !filter);
    setIsClicked((click) => !click);
  };
  return (
    <>
      <button className={`${styles.all}}`} onClick={handleClick}>
        전체
      </button>
    </>
  );
}
