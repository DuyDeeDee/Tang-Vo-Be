import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9YIM6VF5fIs-s2QPWkwwgLaihQMqp4NQ",
  authDomain: "vobe-7255c.firebaseapp.com",
  projectId: "vobe-7255c",
  storageBucket: "vobe-7255c.firebasestorage.app",
  messagingSenderId: "541743417893",
  appId: "1:541743417893:web:237ea288d837213f800dcc"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
