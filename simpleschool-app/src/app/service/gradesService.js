import ApiService from "../apiservice";

class GradesService extends ApiService {

    constructor() {
        super('/api/grades')
    }

    find(gradesFilter) {
        let params = `?user=${gradesFilter.user}`

        if (gradesFilter.school) {
            params = `${params}&school=${gradesFilter.school}`
        }

        if (gradesFilter.student) {
            params = `${params}&student=${gradesFilter.student}`
        }

        if (gradesFilter.subject) {
            params = `${params}&subject=${gradesFilter.subject}`
        }

        return this.get(params)
    }
}

export default GradesService;