import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { uploadImage } from '../api/imageUpload';
import { useNavigate } from 'react-router-dom';
import { writeData } from '../firebase/Firebase-Auth';
import { uuid4 } from 'uuid4';

export default function Edit() {
  console.log(uuid4());
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const goToHome = () => {
    navigate('/');
  };
  const handleChange = (e) => {
    setFile(e.target.files);
    console.log(e);
  };
  const handleDataChange = (e) => {
    setProduct({
      id: uuid4(),
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((res) => console.log(res.url));
    writeData(product);
    // firebase 데이터베이스에 저장
  };
  console.log(product);
  console.log(file);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          {file && <img src={URL.createObjectURL(file[0])} alt="image" />}
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="제품명"
            type="text"
            placeholder="제품명"
            required
            onChange={handleDataChange}
          />
          <input
            name="가격"
            type="text"
            placeholder="가격"
            required
            onChange={handleDataChange}
          />
          <input
            name="카테고리"
            type="text"
            placeholder="카테고리"
            required
            onChange={handleDataChange}
          />
          <input
            name="제품설명"
            type="text"
            placeholder="제품 설명"
            required
            onChange={handleDataChange}
          />
          <input
            name="옵션"
            type="tex t"
            placeholder="옵션"
            required
            onChange={handleDataChange}
          />
          <div>
            <button type="submit">등록</button>
            <button type="button" onClick={goToHome}>
              메인으로
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
