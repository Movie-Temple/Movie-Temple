import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../../../../contexts/AuthContext';
import './signUp.css';
import { db } from '../../../../../firebase';
import { useDispatch } from 'react-redux';
import {setCurrentUserUid} from '../../../../../features/currentUser';

export default function SignUp({toggleShowSignIn}) {

    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match!");
        }
        
        if (nameRef.current.value === '') {
            return setError('Enter your name');
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
                .then((resp) => {
                    db.collection('CUSTOMERS').doc(resp.user.uid).set({
                        name: nameRef.current.value,
                        email: emailRef.current.value
                    })
                    dispatch(setCurrentUserUid(resp.user.uid))
                })
            setError("Your account is now created!");
        } catch {
            setError("Failed to create an account!");
            console.log(error);
        }
        setLoading(false)
    }

    return (

        <div className='register'>
            <div className='register-container'>
                <h2 className='register-header'>Sign up</h2>
                {error && <Alert variant="danger"> {error} </Alert>}
                <form className='register-form' action=''>

                    <label for='register-name'>Name</label><br />
                    <input type='text' id='register-name' name='register-name' ref={nameRef} /><br />

                    <label for='register-email'>E-mail</label><br />
                    <input type='text' id='register-email' name='register-email' ref={emailRef} /><br />

                    <label for='register-password'>Password</label><br />
                    <input type='text' id='register-password' name='register-password' ref={passwordRef} /><br />

                    <label for='register-repeat-password'>Repeat Password</label><br />
                    <input type='text' id='register-repeat-password' name='register-repeat-password' ref={passwordConfirmRef} /><br />
                </form>

                <button onClick={handleSubmit} disabled={loading} >Sign up</button>
                <p className='register-signin'>Already have an account? Click here to <p className='register-signin-link' onClick={toggleShowSignIn}>sign in</p></p>
            </div>
        </div>
    );
}