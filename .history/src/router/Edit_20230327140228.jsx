import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Edit() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    option: '',
  });
  const [file, setFile] = useState({});

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const handleChange = (e) => {
    console.log(e);
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  console.log(product);
  console.log(file);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <img src={URL.createObjectURL(file)} alt="image" /> */}
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile({ ...file, [name]: e.target.files });
            }}
          />
        </div>
        <div>
          <input type="text" placeholder="제품명" />
          <input type="text" placeholder="가격" />
          <input type="text" placeholder="카테고리" />
          <input type="text" placeholder="제품 설명" />
          <input type="text" placeholder="옵션" />
          <div>
            <button>등록</button>
            <button>메인으로</button>
          </div>
        </div>
      </form>
    </main>
  );
}
