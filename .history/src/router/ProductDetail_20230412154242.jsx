import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
export default function ProductDetail() {
  const location = useLocation();
  console.log(location.state);
  const { category, description, id, image, name, option, price } =
    location.state;
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <main className={styles.main}>
      <img src={image} alt="product-image" />
      <section className={styles.information}>
        <div>{category}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <select name="options" id="size-select" onChange={handleChange}>
          {option.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <button>장바구니에 추가</button>
      </section>
    </main>
  );
}
