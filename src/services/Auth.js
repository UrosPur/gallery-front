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
                window.localStorage.setItem('user', response.data.user.id);
                this.setAxiosDefaultAuthorizationHeader();
                return response;
            })

    }

    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = `Bearer ${window.localStorage.getItem('loginToken')}`
        const TOKENUSER = `Bearer ${window.localStorage.getItem('user')}`
        axios.defaults.headers.common['authorization'] = TOKEN
        axios.defaults.headers.common['user'] = TOKENUSER
    }

    isAuthenticated() {
        return !!window.localStorage.getItem("loginToken");
    }


    logout() {
        window.localStorage.removeItem('loginToken')
        window.localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        delete axios.defaults.headers.common['user']

    }



    register(first_name,last_name,email,password,password_confirmation,terms){

        return axios.post('register',{
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
            terms

        })


    }




}


export const auth = new Auth();
