import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebaseConfig/firebase.config';

export const authContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user, name, photoUrl) => {
        return updateProfile(user,{
            displayName: name,
            photoURL: photoUrl
        })
    }

    const authInfo = {
        signUpWithEmail,
        signInWithEmail,
        updateUserProfile

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;