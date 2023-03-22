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
    // user가 있으면 이 user가 admin인지 확인
    console.log(user);
    callback(user); // user 객체가 callback 함수의 매개변수로 들어감
  });
}

// 구글로 로그인
export async function googleLogin() {
  return signInWithPopup(auth, provider);
}

// 데이터 베이스 읽기
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
