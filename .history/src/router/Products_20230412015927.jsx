import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../firebase/Firebase-Auth';
import Product from '../components/Product';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

export default function Products() {
  const myImage = new CloudinaryImage('sample', {
    cloudName: 'momo0170',
  }).resize(fill().width(100).height(150));
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(['products'], getData);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  console.log(products);
  return (
    <>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
      <ul>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
