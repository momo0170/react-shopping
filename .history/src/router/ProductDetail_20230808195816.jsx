import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
import { UserContext } from '../context/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCartData } from '../firebase/Firebase-Auth';

export default function ProductDetail() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  console.log(user);
  const { category, description, id, image, name, option, price } =
    location.state;
  const [selectedOpt, setSelectedOpt] = useState(option && option[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cart, setCart] = useState({
    id,
    name,
    image,
    price,
    quantity: 1,
    selectedOpt,
  });

  const handleChange = (e) => {
    setCart({ ...cart, selectedOpt: e.target.value });
  };
  const queryClient = useQueryClient();
  // mutate 정의
  const addtoCart = useMutation(
    ({ uid, cart }) => {
      addCartData(uid, cart);
    },
    {
      // 카트에 성공적으로 추가되면
      // [cart] 키를 가진 캐시 데이터를 새로고침
      onSuccess: () => {
        console.log('invalidate 됨');
        queryClient.invalidateQueries(['cart']);
      },
    }
  );

  // mutate 실행, "장바구니 추가" 버튼을 클릭 시
  const addCart = (user, cart) => {
    const { uid } = user;
    addtoCart.mutate(
      { uid, cart },
      {
        onSuccess: () => {
          console.log('추가');
          setIsSuccess(true); // isSuccess가 true가 되면서 화면에 "성공적으로 추가되었다"는 표시를 함.
          setTimeout(() => setIsSuccess(false), 2000); // 2초 후에 false로 변경 후 화면에서 표시되지 않게 함.
        },
      }
    );
  };

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
