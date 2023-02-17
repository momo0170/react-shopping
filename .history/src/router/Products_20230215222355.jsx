import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

export default function Products() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });

  return (
    <>
      <div>모든 제품</div>
      <div></div>
    </>
  );
}
