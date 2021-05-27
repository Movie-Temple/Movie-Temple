
import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import Profile from './profile/Profile';
import {signIn} from '../../../../features/currentUser';

const AccountContainer = () =>  {

    const dispatch = useDispatch();

    const currentUserUid = useSelector(state => state.currentUserUid);
    
    
    console.log('userislogged:', currentUserUid);
    
        return (

        <div>
            {currentUserUid ?
            <div>
                <Profile />
                <button >Change state</button>
            </div>
            : 
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignUp />
                        <button >Change state</button>
                    </div>

                </Container>
            </AuthProvider>}
        </div>

        )
}

export default AccountContainer;