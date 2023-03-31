import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVdZ0bnsiU1ZZ7uU2ZXqRr7T2vyCuEoFs",
  authDomain: "miniblog-2508.firebaseapp.com",
  projectId: "miniblog-2508",
  storageBucket: "miniblog-2508.appspot.com",
  messagingSenderId: "536820196028",
  appId: "1:536820196028:web:aa5ab2a3cab02312bda6b9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
