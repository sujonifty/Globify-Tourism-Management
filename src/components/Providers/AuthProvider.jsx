import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create login
    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    //Log out
    const createLogOut = () => {
        return signOut(auth);
    }

    // update profile 
    const createUpdate = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photo,
        })
    }  
      //sign in by google
    const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    //sign in by github
    const createGithubUser = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const info = {
        user,
        setUser,
        error,
        setError,
        loading,
        createUser,
        createLogin,
        createGoogleUser,
        createGithubUser,
        createUpdate,
        createLogOut,

    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;