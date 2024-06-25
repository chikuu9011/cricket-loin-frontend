import React, { useState } from 'react'
import './CSS/Sign.css'
import LoginForm from './Login';
import RegisterForm from './Register';

const Sign = () => {
    const [isLogin, setIsLogin] = useState(true);

    // const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="container-xxl">
            <div className="L-box">
                <div className="L-R">
                    <p>
                        <span className="finner-text" onClick={() => setIsLogin(true)}>Login</span> / <span className="finner-text" onClick={() => setIsLogin(false)}>Register</span>
                    </p>
                </div>
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    )
}

export default Sign
