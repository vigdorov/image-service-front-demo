const SERVICE_NAME = 'imageTokenService';

class TokenService {
    set (token: string) {
        localStorage.setItem(SERVICE_NAME, token);
    }

    get (): string | undefined {
        return localStorage.getItem(SERVICE_NAME) ?? undefined;
    }

    remove () {
        localStorage.removeItem(SERVICE_NAME);
    }
}

const tokenService = new TokenService();

export default tokenService;
