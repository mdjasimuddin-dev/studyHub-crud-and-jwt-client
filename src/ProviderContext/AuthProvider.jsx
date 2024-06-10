import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider()


    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        });

        return ()=> unSubscribe()

    }, [])


    const authInfo = { signInGoogle, userCreate, logOut, user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;