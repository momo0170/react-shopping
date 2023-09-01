import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
import { UserContext } from '../context/UserContext';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const { category, id, image, name, option, price } = location.state;
  const [selectedOpt, setSelectedOpt] = useState(option && option[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cart, setCart] = useState({
    id,
    name,
    image,
    price,
    quantity: 1,
    category: category,
    selectedOpt,
  });

  const handleChange = (e) => {
    setCart({ ...cart, selectedOpt: e.target.value });
  };
  console.log(cart);
  const { addtoCart } = useCart();

  // mutate 실행, "장바구니 추가" 버튼을 클릭 시
  const addCart = () => {
    const uid = user.uid;
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
        {/* 제품 정보 */}
        <section className={styles.information}>
          <div className={styles.category}>[{category}]</div>
          <div className={styles.name}>{name}</div>
          {/* <div className={styles.description}>{description}</div> */}
          <div className={styles.priceBox}>
            <div className={styles.priceText}>판매가</div>
            <div className={styles.price}>{price.toLocaleString()}원</div>
          </div>

          <p className={styles.line}></p>

          {/* 옵션 선택바 */}
          <div className={styles.optionText}>옵션</div>
          <select name="options" id="size-select" onChange={handleChange}>
            {option &&
              option.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
          </select>

          {/* 버튼 */}
          <div className={styles.btns}>
            <button className={styles.addBtn} onClick={addCart}>
              장바구니
            </button>
            <button className={styles.payBtn}>구매하기</button>
          </div>

          {isSuccess ? (
            <p className={styles.message}>장바구니에 추가되었습니다.</p>
          ) : null}
        </section>
      </div>
    </main>
  );
}
