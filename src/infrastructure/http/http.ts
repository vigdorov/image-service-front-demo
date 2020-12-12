import axios from 'axios';
import tokenService from '../../services/TokenService';

enum Method {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
}

class Http {
    request(url: string, method: Method, data?: any) {
        const token = tokenService.get();
        return axios({
            url,
            method,
            data,
            ...(token ? {
                headers: {
                    Authorization: token,
                }
            } : {}),
        });
    }

    get(url: string) {
        return this.request(url, Method.Get);
    }

    post(url: string, data?: any) {
        return this.request(url, Method.Post, data);
    }

    put(url: string, data?: any) {
        return this.request(url, Method.Put, data);
    }

    delete(url: string) {
        return this.request(url, Method.Delete);
    }
}

const http = new Http();

export default http;
