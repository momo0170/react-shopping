import React from 'react';

export default function CartProduct(props) {
  const { id, image, name, price, quantity, selectedOpt } = props.product;
  const plusQuantity = () => {
    console.log('개수 증가');
  };
  const minusQuantity = () => {
    console.log('개수 감소');
  };
  const deleteProduct = () => {
    console.log('상품 삭제');
  };
  return (
    <>
      <img src={image} alt="product-image" />
      <span>{name}</span>
      <span>{selectedOpt}</span>
      <span>{price}</span>
      <div>
        <button onClick={minusQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={plusQuantity}>+</button>
      </div>
      <button onClick={deleteProduct}>삭제</button>
    </>
  );
}
