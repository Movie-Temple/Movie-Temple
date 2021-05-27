import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';
import {useSelector} from 'react-redux';
import Profile from './profile/Profile';
import SignIn from './signIn/SignIn';

const AccountContainer = () =>  {

    const currentUserUid = useSelector(state => state.currentUserUid);
    
    return (

    <div>
        {currentUserUid ?
        
        <div>
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Profile />
                    </div>

                </Container>
            </AuthProvider>
        </div>
        
        : 
        
        <div>
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignIn />
                    </div>

                </Container>
            </AuthProvider>
            </div>
        }
        </div>

        )
}
/*
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignUp />
                    </div>

                </Container>
            </AuthProvider>
*/

export default AccountContainer;