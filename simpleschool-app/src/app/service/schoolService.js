import ApiService from "../apiservice";

class SchoolService extends ApiService {

    constructor() {
        super('/api/school')
    }

    find() {
        return this.get('/');
    }
}

export default SchoolService;