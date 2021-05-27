import React, { useContext, useState, useEffect } from 'react';
import 'firebase/auth'
import { auth } from '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    

    const [currentUser, setCurrentUser] = useState();
    const [customerUID, setCustomerUID] = useState();
     
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setCustomerUID(user.uid);
            console.log(user.uid);
            console.log(customerUID);
            console.log(customerUID);
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

