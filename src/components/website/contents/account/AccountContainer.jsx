import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';
import {useSelector} from 'react-redux';
import Profile from './profile/Profile';
import SignIn from './signIn/SignIn';
import { useState } from 'react';

const AccountContainer = () =>  {

    const currentUserUid = useSelector(state => state.currentUserUid);

    const [showSignIn, setShowSignIn]  = useState(true);

    const toggleShowSignIn = () => {
        setShowSignIn(!showSignIn);
        console.log(showSignIn)
    }
    
    return (

    <div>
        {currentUserUid ?
        
        <div>
            <AuthProvider>
                <Container >

                    <div >
                        <Profile />
                    </div>

                </Container>
            </AuthProvider>
        </div>
        
        : 
        
        <div>
            <AuthProvider>
                <Container >

                    <div >
                        {showSignIn ? <SignIn toggleShowSignIn={toggleShowSignIn}/> : <SignUp toggleShowSignIn={toggleShowSignIn}/>}
                    </div>

                </Container>
            </AuthProvider>
        </div>
        }
        </div>

        )
}

/*
bortkommenterad css i containers
className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} 

bortkommenterad css i div under container
className="w-100" style={{ maxWidth: "400px" }}
*/

export default AccountContainer;