import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  };

  // signout user
  const handleSignOut = () => {
    signOut(auth)
  }

  // manage profile
  const manageProfile = (name,image) => {
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:image
    })
  }

  // forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    googleSignIn,
    handleLogin,
    handleSignOut,
    manageProfile,
    forgetPassword,
    loading,
    setLoading,
    setUser,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.any
}

export default AuthProvider;
