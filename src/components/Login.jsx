import '../login.css'

const Login = () => {

    return (
        <div className='login'>
            <div className='login-container'>
                <h2 className='login-header'>Sign in</h2>

                <form className='login-form' action=''>
                    <label for='login-email'>E-mail</label><br/>
                    <input type='text' id='login-email' name='login-email' value=''/><br/>
                    <label for='login-password'>Password</label><br/>
                    <input type='text' id='login-password' name='login-password' value=''/><br/>
                </form>

                <button>Sign in</button>
                <p className='login-signup'>Don't have an account? Click here to <a className='login-signup-link' href=''>Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login;