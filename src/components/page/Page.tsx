import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {actions} from '../../infrastructure/store/actions';
import {authSelector} from '../../selectors';
import authService from '../../services/AuthService';
import tokenService from '../../services/TokenService';
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
            <div>Images App</div>
            {isAuth && (
                <div>
                    you auth
                    <button type="button" onClick={handleLogout}>logout</button>
                    Images:
                    <ImageList />
                </div>
            )}
            {!isAuth && (
                <LoginForm />
            )}
        </div>
    );
};

export default React.memo(Page);