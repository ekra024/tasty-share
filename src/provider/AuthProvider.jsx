import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadding, setLoadding] = useState(true);
  const [foods, setFoods] = useState([]);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const socialLogin = () => {
    setLoadding(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://tasty-share-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then(() => {});
      } else {
        axios
          .post(
            "https://tasty-share-server.vercel.app/jwt",
            {},
            {
              withCredentials: true,
            }
          )
          .then(() => {});
      }
      setLoadding(false);
    });

    return () => unsubscribe();
  }, [user]);




  const profile = async(name, photo) => {
    if (!auth.currentUser) return Promise.reject("No user sign in");
    setLoadding(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
    .finally(() => setLoadding(false));
  };

  const logoutUser = () => {
    setLoadding(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    error,
    setError,
    createUser,
    signInUser,
    profile,
    logoutUser,
    loadding,
    setLoadding,
    socialLogin,
    foods,
    setFoods,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
