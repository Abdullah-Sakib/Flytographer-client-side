import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user , setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,  photoURL: photo
    })
  } 

  const googleSignUp = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  const logIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  },[])

  const authInfo = {user, loading, createUser, updateUserProfile, googleSignUp, logIn, logOut}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;