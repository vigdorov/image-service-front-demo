import authAPI from '../api/authAPI';
import tokenService from './TokenService';
import {actions} from '../infrastructure/store/actions';

class AuthService {
    login(userName: string) {
        return authAPI.auth(userName)
            .then(({data: token}) => {
                tokenService.set(token);
                actions.changeAuth(true);
            });
    }

    logout() {
        tokenService.remove();
        actions.changeAuth(false);
    }
}

const authService = new AuthService();

export default authService;
