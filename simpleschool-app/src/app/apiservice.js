import axios from 'axios';
import Axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, object) {
        return httpClient.post(url, object);
    }

    put(url, object) {
        return httpClient.put(url, object);
    }

    delete(url) {
        return httpClient.delete(url);
    }

    get(url) {
        return httpClient.get(url);
    }
}

export default ApiService