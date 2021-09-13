import ApiService from "../apiservice";

class SchoolService extends ApiService {

    constructor() {
        super('/api/school')
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

    save(schoo) {
        return this.post('/', schoo);
    }

    update(schoo) {
        return this.put(`/${schoo.id}`, schoo);
    }
}

export default SchoolService;