import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

 firebase.initializeApp({
  apiKey: "AIzaSyD4w03kJ5gnxLLSI1703qVDP3OsgQ3VRsU",
  authDomain: "poseidon-c9b3b.firebaseapp.com",
  databaseURL: "https://poseidon-c9b3b.firebaseio.com",
  projectId: "poseidon-c9b3b",
  storageBucket: "poseidon-c9b3b.appspot.com",
  messagingSenderId: "1033325037549",
  appId: "1:1033325037549:web:32a21125257a5494f809e4",
  measurementId: "G-W9XL93F2FS"
});

export const auth = firebase.auth();
export const db = firebase.firestore();