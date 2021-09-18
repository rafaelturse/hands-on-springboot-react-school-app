import ApiService from "../apiservice";

import * as m from '../../components/toastr'

class UserService extends ApiService {

    constructor() {
        super('/api/users')
    }

    redirectHome(props) {
        props.history.push('/home');
    }

    redirectLogin(props) {
        props.history.push('/login');
    }

    redirectLoginOrHome(props, isAuthenticatedUser) {
        if (isAuthenticatedUser) {
            this.redirectHome(props);
        } else {
            this.redirectLogin(props);
        }
    }

    validate(state) {
        const messages = []

        if (!state.name) {
            messages.push("Name is required")
        }

        if (!state.email) {
            messages.push("Email is required")
        } else if (!state.email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]/)) {
            messages.push("Enter a valid email")
        }

        if (!state.password || !state.passwordConfirm) {
            messages.push("Password fields are required")
        } else if (state.password !== state.passwordConfirm) {
            messages.push("Passwords do not match")
        }

        if (messages && messages.length > 0) {
            messages.forEach((message, i) => {
                m.errorMessage(message)
            })

            return false
        }

        return true
    }

    authenticate(credentials) {
        return this.post('/authenticate', credentials)
    }

    save(user) {
        return this.post('/', user);
    }
}

export default UserService;