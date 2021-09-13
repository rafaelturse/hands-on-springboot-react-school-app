import ApiService from "../apiservice";

class GradesService extends ApiService {

    constructor() {
        super('/api/grades')
    }

    setSubjectList() {
        return [
            { label: 'Select...', value: '' },
            { label: 'Philosophy', value: 1 },
            { label: 'Mathmatics', value: 2 },
            { label: 'Spanish', value: 3 },
            { label: 'English', value: 4 },
            { label: 'Chemical', value: 5 },
            { label: 'Physical', value: 6 },
            { label: 'Story', value: 7 },
            { label: 'Music', value: 8 },
            { label: 'Physical Education', value: 9 },
            { label: 'Sociology', value: 10 },
            { label: 'Geography', value: 11 },
            { label: 'Art', value: 12 }
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