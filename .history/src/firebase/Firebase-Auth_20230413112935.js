import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getDatabase, ref, get, set, child } from 'firebase/database';
import uuid4 from 'uuid4';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase();

// firebase에 사용자 등록
export async function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// 이메일로 로그인
export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 로그아웃
export async function logout() {
  return signOut(auth);
}

// 로그인 옵저버
export async function checkLogin(callback) {
  // 로그인이 된 상태면 user 객체를 파라미터로 전달한다.
  return onAuthStateChanged(auth, async (user) => {
    const result = user && (await readData(user)); // user(로그인된 사용자)가 있다면 데이터베이스에서 데이터를 읽어옴
    callback(result); // admin 사용자인지 아닌지 판별된 결과를 callback 함수로 전달
  });
}

// 구글로 로그인
export async function googleLogin() {
  return signInWithPopup(auth, provider);
}

// 데이터 베이스 읽기
async function readData(user) {
  const adminRef = ref(db, 'admins'); // db의 admins 레퍼런스
  return get(adminRef) // 해당 레퍼런스의 데이터를 읽음
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const isAdmin = data.includes(user.uid);
        return { ...user, isAdmin };
      } else {
        console.log('No data available');
        return user;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// 데이터 베이스 쓰기
export async function writeData(data, imgUrl) {
  const id = uuid4();
  set(ref(db, `products/${id}`), {
    ...data,
    id,
    image: imgUrl,
    price: parseInt(data.price),
    option: data.option.split(','),
  });
}

// 데이터 베이스 읽기
export async function getData() {
  return get(ref(db, `products`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        console.log('No data available');
        return [];
      }
    }) //
    .catch((error) => {
      console.error(error);
    });
}

// 장바구니 정보 추가
export async function addCart(userId, id, selected, data) {
  return set(ref(db, `cart/${userId}/${id}`), {
    ...data,
    quantity: 1,
    option: selected,
  });
}
