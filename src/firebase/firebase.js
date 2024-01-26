// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAC4h5ZhexoDSJzKgzsy9zWcQnX5oPKXN0',
  authDomain: 'react-next-shop-72eac.firebaseapp.com',
  projectId: 'react-next-shop-72eac',
  storageBucket: 'react-next-shop-72eac.appspot.com',
  messagingSenderId: '813151476665',
  appId: '1:813151476665:web:e4f12535304435734a3468',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
