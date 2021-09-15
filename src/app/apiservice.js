import axios from 'axios';

const httpClient = axios.create({
    //baseURL: ' https://rt-simpleschool-app.herokuapp.com'
    baseURL: ' http://localhost:8083'
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, object) {
        return httpClient.post(`${this.apiurl}${url}`, object);
    }

    put(url, object) {
        return httpClient.put(`${this.apiurl}${url}`, object);
    }

    delete(url) {
        return httpClient.delete(`${this.apiurl}${url}`);
    }

    get(url) {
        return httpClient.get(`${this.apiurl}${url}`);
    }
}

export default ApiService
