import React, { useContext, useState, useEffect } from 'react';
import 'firebase/auth'
import { auth } from '../firebase';

import {useDispatch, useSelector} from 'react-redux';
//import Profile from './profile/Profile';
//import {signIn} from '../../../../features/currentUser';


const AuthContext = React.createContext();

//const dispatch = useDispatch();

//const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    

    const [currentUser, setCurrentUser] = useState();
     
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            //dispatch(signIn())
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