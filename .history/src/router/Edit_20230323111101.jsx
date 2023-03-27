import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Edit() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  return (
    <main>
      <div>
        <img src="" alt="" />
        <input type="file" onChange={(e) => console.log(e)} />
      </div>
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button>등록</button>
          <button>메인으로</button>
        </div>
      </div>
    </main>
  );
}
