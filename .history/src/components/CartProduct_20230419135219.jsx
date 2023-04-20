import React from 'react';

export default function CartProduct(props) {
  const { id, image, name, price, quantity, selectedOpt } = props.product;
  const plusQuantity = () => {
    console.log('개수 증가');
  };
  const minusQuantity = () => {
    console.log('개수 감소');
  };
  return (
    <>
      <img src={image} alt="product-image" />
      <span>{name}</span>
      <span>{selectedOpt}</span>
      <span>{price}</span>
      <div>
        <button onClick={plusQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={minusQuantity}>+</button>
      </div>
    </>
  );
}
