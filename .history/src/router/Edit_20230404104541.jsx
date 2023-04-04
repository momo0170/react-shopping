import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { uploadImage } from '../api/imageUpload';
import { useNavigate } from 'react-router-dom';
import { writeData } from '../firebase/Firebase-Auth';

export default function Edit() {
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
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((res) => console.log(res.url));
    writeData(product);
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
            name="name"
            type="text"
            placeholder="제품명"
            required
            onChange={handleDataChange}
          />
          <input
            name="price"
            type="text"
            placeholder="가격"
            required
            onChange={handleDataChange}
          />
          <input
            name="category"
            type="text"
            placeholder="카테고리"
            required
            onChange={handleDataChange}
          />
          <input
            name="description"
            type="text"
            placeholder="제품 설명"
            required
            onChange={handleDataChange}
          />
          <input
            name="option"
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
