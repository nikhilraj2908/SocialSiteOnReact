
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsKHG6xjjE9SHGCOkFDzIKLW8l9woGslI",
  authDomain: "projectonreact.firebaseapp.com",
  projectId: "projectonreact",
  storageBucket: "projectonreact.appspot.com",
  messagingSenderId: "296196496353",
  appId: "1:296196496353:web:e05ce95ffef09281fb50a0",
  measurementId: "G-8F237NFQXQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
