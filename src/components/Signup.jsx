import React, {useLayoutEffect, useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import '../register.css'

// JJ: This code is not used at the moment, as they are moved to Register.jsx
export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.log("Heeey1");
            return setError("Password do not match!");
            
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log("Heeey2");
        } catch {
            setError("Failed to create an account!");
            console.log(error);
        }
        setLoading(false)
    }

    return (

        <div className='register'>
            <div className='register-container'>
                <h2 className='register-header'>Register</h2>
                {error && <Alert variant="danger"> {error} </Alert>}
                <form className='register-form' action=''>
                    <label for='register-name'>Name</label><br/>
                    <input type='text' id='register-name' name='register-name' value=''/><br/>

                    <label for='register-email'>E-mail</label><br/>
                    <input type='text' id='register-email' name='register-email' ref={emailRef}/><br/>
                    
                    <label for='register-password'>Password</label><br/>
                    <input type='text' id='register-password' name='register-password' ref={passwordRef}/><br/>
                    
                    <label for='register-repeat-password'>Repeat Password</label><br/>
                    <input type='text' id='register-repeat-password' name='register-repeat-password' ref={passwordConfirmRef}/><br/>
                </form>

                <button onClick={handleSubmit} disabled={loading} >Sign up</button>
                <p className='register-signin'>Already have an account? Click here to <a className='register-signin-link' href=''>Sign in</a></p>
            </div>
        </div>
        

        /*<div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>

                    </Form>
                    <Button onClick={handleSubmit} disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                    Already have an account? Log In
            </div>
        </div>
        */
    );

}
