import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBCONdSHU8ls6Xc5yYpvc4w54DEPVsmeXQ",
  authDomain: "mehfil-images.firebaseapp.com",
  projectId: "mehfil-images",
  storageBucket: "mehfil-images.appspot.com",
  messagingSenderId: "318497441762",
  appId: "1:318497441762:web:fa2887f51035fe21465bbb"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)