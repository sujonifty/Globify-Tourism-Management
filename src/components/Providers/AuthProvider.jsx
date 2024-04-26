import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import PropTypes from 'prop-types'; 

export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [error, setError]= useState('');
    const [loading, setLoading]=useState(true);


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
     

    const createLogOut=()=>{
        return signOut(auth);
    }
    // update profile 
    const createUpdate = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photo,
        })
    }

    const info={
        user,
        setUser,
        error,
        setError,
        loading,
        createUser,
        createUpdate,
        createLogOut,

    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;