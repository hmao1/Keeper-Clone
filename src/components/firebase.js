import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";


//initialize the firebase
const firebaseConfig = {
  apiKey: "AIzaSyA4vt7xGZfHc_rsEELgpnOj7uGMVXcU7w0",
  authDomain: "keep-clone-e95a1.firebaseapp.com",
  projectId: "keep-clone-e95a1",
  storageBucket: "keep-clone-e95a1.appspot.com",
  messagingSenderId: "559197828276",
  appId: "1:559197828276:web:2abdb8bf0a7f386dfad3e1",
  measurementId: "G-2BF2QQMNT7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

//authentication handler
export const auth = getAuth();

// export const signUpFunc = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

// //Custom hook to check the auth state in Firebase
// export const useAuth = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
//     return unSubscribe;
//   },[]);

//   return currentUser;
// }



// //sign out user
// export const logOut = () => {
//   return signOut(auth);
// }

// //login user
// export const logIn = (email, password) => {
//   return signInWithEmailAndPassword(auth, email,password);
// }