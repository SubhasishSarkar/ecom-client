import http from "../http-common";

class LoginService {
    signUp(data) {
        return http.post(`/auth/signup`, data);
    }

    logIn(data) {
        return http.post(`/auth/login`, data);
    }
}

export default new LoginService();