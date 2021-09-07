import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

const LoginPage = () => {
    const auth = useAuth()
    const history = useHistory()
    const location = useLocation();
    const handleLogin=()=>{
        auth.login();
        history.push(location.state?.from ||"/")

    }
    return (
        <div>
           <h1>Login</h1>
           <button onClick={handleLogin}>Signin</button>
        </div>
    );
}

export default LoginPage;
