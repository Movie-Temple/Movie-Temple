
import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import Profile from './profile/Profile';
import {signIn} from '../../../../features/currentUser';

const AccountContainer = () =>  {

    const dispatch = useDispatch();

    const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);
    
    
    console.log('userislogged:', userIsLoggedIn);
    
        return (

        <div>
            {userIsLoggedIn ?
            <div>
                <Profile />
                <button onClick={() => dispatch(signIn())}>Change state</button>
            </div>
            : 
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignUp />
                        <button onClick={() => dispatch(signIn())}>Change state</button>
                    </div>

                </Container>
            </AuthProvider>}
        </div>

        )
}

export default AccountContainer;