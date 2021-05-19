import React, { Component } from 'react'
import Register from '../Register';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../contexts/AuthContext';




export class Log extends Component {
    render() {
        return (
            <div>
                <AuthProvider>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <Register />
                        </div>

                    </Container>
                </AuthProvider>
            </div>
        )
    }
}

export default Log