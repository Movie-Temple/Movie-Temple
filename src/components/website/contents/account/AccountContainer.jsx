
import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';



const AccountContainer = () =>  {
    
        return (
            <div>
                <AuthProvider>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <SignUp />
                        </div>

                    </Container>
                </AuthProvider>
            </div>
        )
    
}

export default AccountContainer;