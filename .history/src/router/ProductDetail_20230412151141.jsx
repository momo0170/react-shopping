import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const location = useLocation();
  console.log(location.state);
  const { category, description, id, image, name, option, price } =
    location.state;
  return (
    <main>
      <section>
        <img src={image} alt="product-image" />
      </section>
      <section>
        <div>{category}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </section>
    </main>
  );
}
