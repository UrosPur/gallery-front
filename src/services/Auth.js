import axios from 'axios'

export default class Auth {

    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'

    }


    login(email, password) {
        return axios.post('login', {
            email, password
        })
            .then(response => {

                window.localStorage.setItem('loginToken', response.data.token);
                this.setAxiosDefaultAuthorizationHeader();
            })

    }


    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = `Bearer ${window.localStorage.getItem('loginToken')}`
        axios.defaults.headers.common['authorization'] = TOKEN

    }
}


export const auth = new Auth();
