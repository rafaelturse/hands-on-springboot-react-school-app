class RedirectService {

    redirectHome(path) {
        path.push('/home');
    }

    redirectLoginOrHome(path, isAuthenticatedUser) {
        if (isAuthenticatedUser) {
            path.push('/home');
        } else {
            path.push('/login');
        }
    }
}

export default RedirectService;