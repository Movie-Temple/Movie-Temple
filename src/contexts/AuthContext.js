import React, { useContext, useState, useEffect } from 'react';
import 'firebase/auth';
import { auth } from '../firebase';
import {useDispatch} from 'react-redux';
import {setCurrentUserUid} from '../features/currentUser';
//import { db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState('');
     
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout() {
        return auth.signOut();
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user == null) {
                dispatch(setCurrentUserUid(''));
            } else {
                setCurrentUser(user);
            }
        })
        
        return unsubscribe;
    }, [dispatch]);

    const value = {
        currentUser,
        signup,
        signin,
        signout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}