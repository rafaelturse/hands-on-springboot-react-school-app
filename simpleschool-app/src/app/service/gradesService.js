import ApiService from "../apiservice";

class GradesService extends ApiService {

    constructor() {
        super('/api/grades')
    }

    setSubjectList() {
        return [
            { label: 'Select...', value: '' },
            { label: 'Philosophy', value: 0 },
            { label: 'Mathmatics', value: 1 },
            { label: 'Spanish', value: 2 },
            { label: 'English', value: 3 },
            { label: 'Chemical', value: 4 },
            { label: 'Physical', value: 5 },
            { label: 'Story', value: 6 },
            { label: 'Music', value: 7 },
            { label: 'Physical Education', value: 8 },
            { label: 'Sociology', value: 9 },
            { label: 'Geography', value: 10 },
            { label: 'Art', value: 11 }
        ]
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

    findById(id) {
        return this.get(`/${id}`)
    }

    deleteAction(id) {
        return this.delete(`/${id}`)
    }

    save(grades) {
        return this.post('/', grades);
    }

    update(grades) {
        return this.put(`/${grades.id}`, grades);
    }
}

export default GradesService;