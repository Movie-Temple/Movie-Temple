import React, { useContext, useState, useEffect } from 'react';
import 'firebase/auth'
import { auth } from '../firebase';

import {useDispatch} from 'react-redux';
import {setCurrentUserUid} from '../features/currentUser';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState('test');
     
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect( () => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user == null) {
                console.log('no user, authContext')
            } else {
                setCurrentUser(user);
                dispatch(setCurrentUserUid(user.uid));
                console.log(user)
            }
        })
        
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}