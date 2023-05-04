import React, { createContext, useEffect } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

    const googleAuth = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const githubAuth = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (user, name, photoUrl) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>{

        })
    },[])

    const authInfo = {
        signUpWithEmail,
        signInWithEmail,
        updateUserProfile,
        googleAuth,
        githubAuth

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;