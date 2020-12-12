import React, {SyntheticEvent, useState} from 'react';
import './LoginForm.css';

import authService from '../../services/AuthService';

const LoginForm: React.FC = () => {
    const [{userName}, setForm] = useState({
        userName: '',
    });

    const handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const {id, value} = event.currentTarget;
        setForm(state => ({
            ...state,
            [id]: value,
        }));
    }

    const handleSend = (e: SyntheticEvent) => {
        e.preventDefault();
        authService.login(userName);
    }

    return (
        <form className='form'>
            <label className='label'>User name:
                <input className='input' value={userName} id="userName" onChange={handleInputChange} />
            </label>
            <button className='button__form' type="submit" onClick={handleSend}>Send</button>
        </form>
    );
};

export default React.memo(LoginForm);