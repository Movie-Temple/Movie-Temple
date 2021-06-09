import './signIn.css';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../../../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { setCurrentUserUid } from '../../../../../features/currentUser';

const SignIn = ({toggleShowSignIn}) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("");
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value)
                .then(() => {

                    dispatch(setCurrentUserUid(currentUser.uid));
                })
            console.log("Logged in!");
            setError("Logged in!");
        } catch {
            setError("Failed to log in");
            console.log('error', error);
        }
        setLoading(false)
    }


    return (
        <div className='login'>
            <div className='login-container'>
                <h2 className='login-header'>Sign in</h2>
                {error && <Alert variant="danger"> {error} </Alert>}
                <form className='login-form' action=''>
                    <label htmlFor='login-email'>E-mail</label><br/>
                    <input type='text' id='login-email' name='login-email' ref={emailRef}/><br/>
                    <label htmlFor='login-password'>Password</label><br/>
                    <input type='text' id='login-password' name='login-password' ref={passwordRef}/><br/>
                </form>

                <button onClick={handleSubmit} disabled={loading}>Sign in</button>
                <p className='login-signup'>Don't have an account? Click here to <p className='login-signup-link' onClick={toggleShowSignIn}>sign up</p></p>
            </div>
        </div>
    )
}

export default SignIn;