import React, { useContext } from 'react';
import styles from '../css/CartStatus.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const { user } = useContext(UserContext);
  const {
    cartProduct: { data: products },
  } = useCart();

  return (
    <div className="relative">
      {products && <p className={styles.number}>{products.length}</p>}
    </div>
  );
}
