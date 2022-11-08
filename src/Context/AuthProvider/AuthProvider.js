import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user , setUser] = useState(null);
  
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,  photoURL: photo
    })
  } 

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }



  const authInfo = {user, createUser, updateUserProfile, googleSignUp, logIn}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;