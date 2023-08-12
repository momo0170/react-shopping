import React from 'react';
import styles from '../css/CartProduct.module.css';
import useCart from '../hooks/useCart';

export default function CartProduct(props) {
  const { id, image, name, price, quantity, selectedOpt } = props.product;

  const { addOrUpdateItem, removeItem } = useCart();
  const plusQuantity = () => {
    addOrUpdateItem.mutate({ ...props.product, quantity: quantity + 1 });
  };
  const minusQuantity = () => {
    // 개수가 1개라면 그냥 리턴
    if (quantity < 2) return;
    else {
      addOrUpdateItem.mutate({ ...props.product, quantity: quantity - 1 });
    }
  };
  const deleteProduct = (id) => {
    removeItem.mutate(id);
  };

  return (
    <>
      <img src={image} alt="product-image" className={styles.cartImage} />
      <span>{name}</span>
      <span>{selectedOpt}</span>
      <span>{price}</span>
      <div className={styles.btns}>
        <button onClick={minusQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={plusQuantity}>+</button>
      </div>
      <button onClick={deleteProduct}>삭제</button>
    </>
  );
}
