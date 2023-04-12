import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
export default function ProductDetail() {
  const location = useLocation();
  const { category, description, id, image, name, option, price } =
    location.state;

  return (
    <main className={styles.main}>
      <img src={image} alt="product-image" />
      <section className={styles.information}>
        <div>{category}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price.toLocaleString()}원</div>
        <select name="options" id="size-select">
          {option.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button>장바구니에 추가</button>
      </section>
    </main>
  );
}
