import React from 'react';

export default function Edit() {
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
