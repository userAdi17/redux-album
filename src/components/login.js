import React from 'react';
import {Link} from 'react-router-dom';
import {getAlbumsData} from "../redux/reducers/albums";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div className='login-page'>
            <form className="login-form">
                <input type="text" placeholder='Login'/>
                <input type="text" placeholder='password'/>
                <Link to='/home' onClick={() => dispatch(getAlbumsData())}>Войти</Link>
            </form>
        </div>
    );
};
export default Login;