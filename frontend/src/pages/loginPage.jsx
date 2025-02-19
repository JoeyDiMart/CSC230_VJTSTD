import React from "react";
import './loginPage.css';

function Login() {
    return (
        <div className="Login">
            <div className="LoginWrapper">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-field">
                        <input type="email" placeholder='Email Address' required/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Password' required/>
                    </div>

                    <div className='forgotPassword'>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="CreateAccount">
                        <p>Don't have an account?<a href="#">Create account</a></p>
                    </div>
                </form>
            </div>
        </div>



    );
}
export default Login;
