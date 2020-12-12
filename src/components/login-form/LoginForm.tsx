import React, {SyntheticEvent, useState} from 'react';

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
        <form>
            <label>User name:
                <input value={userName} id="userName" onChange={handleInputChange} />
            </label>
            <button type="submit" onClick={handleSend}>Send</button>
        </form>
    );
};

export default React.memo(LoginForm);