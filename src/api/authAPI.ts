import {IMAGES_API_PATH} from '../consts';
import http from '../infrastructure/http/http';

class AuthAPI {
    auth(userName: string) {
        return http.post(`${IMAGES_API_PATH}/auth`, {
            login: userName,
        });
    }
}

const authAPI = new AuthAPI();

export default authAPI;