class LocalStorageService {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key, value) {
       return JSON.parse(localStorage.getItem(key));
    }

    static removeItem(key) {
        return JSON.parse(localStorage.removeItem(key));
     }
}

export default LocalStorageService