import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import './Page.css';
import {actions} from '../../infrastructure/store/actions';
import {authSelector} from '../../selectors';
import authService from '../../services/AuthService';
import tokenService from '../../services/TokenService';
import Arrows from '../arrows/arrows';
import ImageList from '../image-list/ImageList';
import LoginForm from '../login-form/LoginForm';

const Page: React.FC = () => {
    useEffect(() => {
        const token = tokenService.get();
        if (token) {
            actions.changeAuth(true);
        }
    }, []);
    const isAuth = useSelector(authSelector);

    const handleLogout = () => {
        authService.logout();
    };

    return (
        <div>
            <h1 className='title'>Images App</h1>
            {isAuth && (
                <>
                    <div className='box'>
                        <h2 className='subtitle'>you auth</h2>
                        <button className='button' type="button" onClick={handleLogout}>logout</button>
                        <h2 className='title'>Images:</h2>

                    </div>
                    <Arrows />
                    <ImageList />
                </>
            )}
            {!isAuth && (
                <LoginForm />
            )}
        </div>
    );
};

export default React.memo(Page);