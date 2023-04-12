import React from 'react';

export default function Product(props) {
  console.log(props);
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
