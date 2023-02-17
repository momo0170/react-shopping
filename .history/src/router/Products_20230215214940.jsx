import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

export default function Products() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const myImage = cld.image('neat');
  return (
    <>
      <div>모든 제품</div>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </>
  );
}
