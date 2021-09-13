class localStorageService {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key, value) {
       return JSON.parse(localStorage.getItem(key));
    }
}

export default localStorageService