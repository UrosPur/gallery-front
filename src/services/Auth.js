import axios from 'axios'

export default class Auth {

    // kurs
    // constructor() {
    //     // axios.defaults.baseURL = 'http://localhost:8000/api/'
    //     axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
    // }


    // kuci
    constructor() {
        axios.defaults.baseURL = 'http://gallery-back.kev/api/'
    }


    login(email,password){
        return axios.post('login', {
            email,password
        })
            .then(response => {
                window.localStorage.setItem('loginToken', response.data.token);
                this.setAxiosDefaultAuthorizationHeader();
            })


    }


}


export const auth = new Auth();
