import ApiService from "../apiservice";

class UserService extends ApiService {

    constructor(){
        super('/api/users')
    }
}

export default UserService;