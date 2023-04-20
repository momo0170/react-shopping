import React from 'react';

export default function CartProduct(props) {
  const { id, image, name, price, quantity, selectedOpt } = props.product;
  return (
    <>
      <img src={image} alt="product-image" />
      <span>{name}</span>
      <span>{selectedOpt}</span>
      <span>{price}</span>
      <div>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </>
  );
}
