import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
import { UserContext } from '../context/UserContext';
import { addCartData } from '../firebase/Firebase-Auth';

export default function ProductDetail() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const { category, description, id, image, name, option, price } =
    location.state;
  const [selectedOpt, setSelectedOpt] = useState(option && option[0]);
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [cart, setCart] = useState({
    id,
    name,
    image,
    price,
    quantity,
    selectedOpt,
  });
  const handleChange = (e) => {
    setSelectedOpt(e.target.value);
  };
  const addCart = () => {
    //
    addCartData(user.uid, cart) //
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
      });
  };
  console.log(cart);
  console.log(selectedOpt);
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <img src={image} alt="product-image" className={styles.image} />
        <section className={styles.information}>
          <div className={styles.category}>[{category}]</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{price.toLocaleString()}원</div>
          <div>
            <select name="options" id="size-select" onChange={handleChange}>
              {option &&
                option.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
            </select>
            {isSuccess ? <p>장바구니에 추가되었습니다.</p> : null}
            <button className={styles.addBtn} onClick={addCart}>
              장바구니에 추가
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
