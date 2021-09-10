import ApiService from "../apiservice";

class UserService extends ApiService {

    constructor(){
        super('/api/users')
    }

    authenticate(credentials){
        return this.post('/authenticate', credentials)
    }
}

export default UserService;