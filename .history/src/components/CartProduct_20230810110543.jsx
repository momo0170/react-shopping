import React, { useContext } from 'react';
import { addCartData, deleteCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import styles from '../css/CartProduct.module.css';
import useCart from '../hooks/useCart';

export default function CartProduct(props) {
  const { id, image, name, price, quantity, selectedOpt } = props.product;
  const { user } = useContext(UserContext);

  const { addOrUpdateItem, removeItem } = useCart();
  const plusQuantity = () => {
    addOrUpdateItem({ ...props.product, quantity: quantity + 1 });
  };
  const minusQuantity = () => {
    // 개수가 1개라면 그냥 리턴
    if (quantity < 2) return;
    else {
      addCartData({ ...props.product, quantity: quantity - 1 });
    }
  };
  const deleteProduct = () => {
    removeItem(id);
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
