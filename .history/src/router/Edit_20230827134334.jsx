import React, { useState } from 'react';
import { uploadImage } from '../api/imageUpload';
import { useNavigate } from 'react-router-dom';

import styles from '../css/Edit.module.css';
import useProducts from '../hooks/useProducts';
import Modal from '../modal/Modal';

export default function Edit() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isRegister, setIsRegister] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const goToHome = () => {
    navigate('/');
  };
  const handleChange = (e) => {
    setFile(e.target.files);
    console.log(e);
  };
  const handleDataChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const { addProduct } = useProducts();

  // // 모달창 클릭시
  // const clickModal = (e) => {
  //   e.preventDefault();
  //   setIsRegister(true);

  //   // 이미지 업로드
  //   uploadImage(file) //
  //     .then((url) => {
  //       // mutate 실행
  //       addProduct.mutate(
  //         { product, url },
  //         {
  //           onSuccess: () => {
  //             console.log('추가');
  //             setIsSuccess(true); // isSuccess가 true가 되면서 화면에 "성공적으로 추가되었다"는 표시를 함.
  //             setTimeout(() => setIsSuccess(false), 2000); // 2초 후에 false로 변경 후 화면에서 표시되지 않게 함.
  //           },
  //         }
  //       );
  //     })
  //     .then(() => setIsRegister(false));
  // };

  // 등록하기 클릭시
  const handleSubmit = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <Modal isClick={isClick} />
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <span>제품 등록</span>
          {/* 이미지 업로드 */}
          <div className={styles.imgAndUpload}>
            {/* 이미지 */}
            <div className={styles.image}>
              {file && <img src={URL.createObjectURL(file[0])} alt="img" />}
            </div>

            {/* 파일 박스 */}
            <div className={styles.fileBox}>
              <input
                value={file ? file[0].name : '첨부파일'}
                className={styles.imageName}
                disabled
              />
              <input
                id="uploadFile"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleChange}
                required
                className={styles.upload}
              />
              <label htmlFor="uploadFile" className={styles.label}>
                파일찾기
              </label>
            </div>
          </div>
          {/* 입력란 */}
          <div className={styles.inputs}>
            <input
              name="name"
              type="text"
              placeholder="제품명"
              required
              onChange={handleDataChange}
              className={styles.name}
            />
            <input
              name="price"
              type="text"
              placeholder="가격"
              required
              onChange={handleDataChange}
              className={styles.price}
            />
            <input
              name="category"
              type="text"
              placeholder="카테고리"
              required
              onChange={handleDataChange}
              className={styles.category}
            />
            <input
              name="description"
              type="text"
              placeholder="제품 설명"
              required
              onChange={handleDataChange}
              className={styles.description}
            />
            <input
              name="option"
              type="text"
              placeholder="옵션"
              required
              onChange={handleDataChange}
              className={styles.option}
            />
            {/* 버튼 */}
            <div className={styles.buttons}>
              <button type="submit" className={styles.registerBtn}>
                등록하기
              </button>
              <button
                type="button"
                onClick={goToHome}
                className={styles.goToHomeBtn}
              >
                메인
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
