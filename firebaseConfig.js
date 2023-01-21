import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA8DagiYJ-56KplAwnCkCTRQrIAvqQ5CQ",
  authDomain: "rete-mobile.firebaseapp.com",
  projectId: "rete-mobile",
  storageBucket: "rete-mobile.appspot.com",
  messagingSenderId: "851841151565",
  appId: "1:851841151565:web:aa3cbb3fb36fc775fba204",
  measurementId: "G-2LTLC09PRG",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const store = getStorage(app);
