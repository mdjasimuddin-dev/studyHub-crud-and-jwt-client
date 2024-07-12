import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState()
    const [loader, setLoader] = useState(false)

    const googleProvider = new GoogleAuthProvider()


    const signInGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userCreate = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userLoginWithPassword = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoader(true)
        const { data } = axios.get('https://crud-and-jwt-server-nine.vercel.app/logout', {withCredentials : true})
        console.log(data)
        return signOut(auth)
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
            
        });

        return () => unSubscribe()

    }, [])



    const authInfo = {
        signInGoogle,
        userCreate,
        logOut,
        user,
        userLoginWithPassword,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;