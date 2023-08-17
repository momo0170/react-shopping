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
  const deleteProduct = () => {
    removeItem.mutate(id);
  };

  return (
    <>
      <div className={styles.productInfo}>
        <img src={image} alt="product-image" className={styles.cartImage} />
        <span>{name}</span>
        <span>{selectedOpt}</span>
        <span>{`${price.toLocaleString()}원`}</span>
      </div>
      <div className={styles.btns}>
        <button onClick={minusQuantity} className={styles.minusBtn}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={plusQuantity} className={styles.plusBtn}>
          +
        </button>
      </div>
      <button onClick={deleteProduct} className={styles.deleteBtn}>
        삭제
      </button>
    </>
  );
}
