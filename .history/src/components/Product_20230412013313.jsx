import React from 'react';

export default function Product({ category, description, image, name, price }) {
  console.log(name);
  return (
    <>
      <div>{category}</div>
      <div>{description}</div>
      <div>{image}</div>
      <div>{name}</div>
      <div>{price}</div>
    </>
  );
}
