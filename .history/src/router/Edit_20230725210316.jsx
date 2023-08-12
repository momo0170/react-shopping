import React, { useState } from 'react';
import { uploadImage } from '../api/imageUpload';
import { useNavigate } from 'react-router-dom';

import styles from '../css/Edit.module.css';
import useProducts from '../hooks/useProducts';

export default function Edit() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isRegister, setIsRegister] = useState(false); // 제품이 등록
  const [isSuccess, setIsSuccess] = useState(false);

  console.log(product);
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

  // mutate
  const { addProduct } = useProducts();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegister(true);
    // 이미지 업로드
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              console.log('추가');
              setIsSuccess(true); // isSuccess가 true가 되면서 화면에 "성공적으로 추가되었다"는 표시를 함.
              setTimeout(() => setIsSuccess(false), 2000); // 2초 후에 false로 변경 후 화면에서 표시되지 않게 함.
            },
          }
        );
        // writeData(product, url) //
        //   .then(() => {
        //     setIsSuccess(true);
        //     setTimeout(() => setIsSuccess(false), 2000);
        //   });
      })
      .then(() => setIsRegister(false));
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span>제품 등록</span>
        {isSuccess && <p>성공적으로 등록되었습니다.</p>}
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
            type="tex t"
            placeholder="옵션"
            required
            onChange={handleDataChange}
            className={styles.option}
          />
          <div>
            <button type="submit" className={styles.register}>
              {isRegister ? '등록 중...' : '등록'}
            </button>
            <button
              type="button"
              onClick={goToHome}
              className={styles.goToHome}
            >
              메인
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
