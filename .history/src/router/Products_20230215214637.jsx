import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Products() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const myImage = cld.image('docs/models');
  return (

  
  )
}
