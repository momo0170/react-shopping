import React from 'react';

export default function Products() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const myImage = cld.image('docs/models');
  return <div>모든 제품</div>;
}
