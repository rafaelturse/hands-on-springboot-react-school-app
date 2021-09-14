import LocalStorageService from './localStorageService'

export const LOGGED_USER = '_logged_user'

class AuthService {

    static isAuthenticatedUser() {
        const user = LocalStorageService.getItem(LOGGED_USER)
        return user && user.id;
    }

    static getAuthenticatedUser() {
        return LocalStorageService.getItem(LOGGED_USER)
    }

    static removeAuthenticatedUser() {
        LocalStorageService.removeItem(LOGGED_USER)
    }

    static login(user) {
        LocalStorageService.setItem(LOGGED_USER, user)
    }
}

export default AuthService