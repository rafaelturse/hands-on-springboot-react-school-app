import ApiService from "../apiservice";

class SchoolService extends ApiService {

    constructor() {
        super('/api/school')
    }

    findAll() {
        return this.get('/')
    }

    find(schoolFilter) {
        return this.get(`?school=${schoolFilter}`)
    }

    findById(id) {
        return this.get(`/${id}`)
    }

    deleteAction(id) {
        return this.delete(`/${id}`)
    }

    save(school) {
        return this.post('/', school);
    }

    update(school) {
        return this.put(`/${school.id}`, school);
    }
}

export default SchoolService;