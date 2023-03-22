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
import { getDatabase, ref, onValue } from 'firebase/database';

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
  return onAuthStateChanged(auth, (user) => {
    // user가 있으면 데이터베이스에서 데이터 읽어오기
    console.log(user);
    user && readData(user);
    user && callback(user); // user 객체가 callback 함수의 매개변수로 들어감
  });
}

// 구글로 로그인
export async function googleLogin() {
  return signInWithPopup(auth, provider);
}

async function readData(user) {
  const starCountRef = ref(db, 'admins'); // db 인스턴스에서 'admins'의 레퍼런스
  // 해당 레퍼런스에서 스냅샷을 이벤트 콜백으로 전달
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val(); // 해당 스냅샷에서 값을 읽어옴
    console.log(data);
  });
}
// 데이터 베이스 읽기
