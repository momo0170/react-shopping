import React from 'react';

export default function Product(props) {
  const { name, category, id, price, image, description, option } =
    props.product;
  return (
    <>
      {/* <img src={image} alt="product-image" /> */}
      <span>{name}</span>
      <span>{price}</span>
    </>
  );
}
