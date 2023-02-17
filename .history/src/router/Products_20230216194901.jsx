import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Products() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });

  return (
    <>
      <div>모든 제품</div>
    </>
  );
}
