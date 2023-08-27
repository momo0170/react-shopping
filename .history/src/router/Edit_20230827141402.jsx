import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Edit.module.css';
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

  // // 모달창 클릭시
  // const clickModal = (e) => {
  //   e.preventDefault();

  // };

  // 등록하기 클릭시
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  return (
    <>
      <Modal
        isClick={isClick}
        setIsSuccess={setIsSuccess}
        setIsRegister={setIsRegister}
        file={file}
        product={product}
      />
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
