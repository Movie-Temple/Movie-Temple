import '../register.css'

const Register = () => {

    return (
        <div className='register'>
            <div className='register-container'>
                <h2 className='register-header'>Register</h2>

                <form className='register-form' action=''>
                    <label for='register-name'>Name</label><br/>
                    <input type='text' id='register-name' name='register-name' value=''/><br/>
                    <label for='register-email'>E-mail</label><br/>
                    <input type='text' id='register-email' name='register-email' value=''/><br/>
                    <label for='register-password'>Password</label><br/>
                    <input type='text' id='register-password' name='register-password' value=''/><br/>
                    <label for='register-repeat-password'>Repeat Password</label><br/>
                    <input type='text' id='register-repeat-password' name='register-repeat-password' value=''/><br/>
                </form>

                <button>Sign up</button>
                <p className='register-signin'>Already have an account? Click here to <a className='register-signin-link' href=''>Sign in</a></p>
            </div>
        </div>
    )
}

export default Register;