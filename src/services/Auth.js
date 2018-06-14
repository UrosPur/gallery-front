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
                return response;
            })

    }

    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = `Bearer ${window.localStorage.getItem('loginToken')}`
        axios.defaults.headers.common['authorization'] = TOKEN
    }

    isAuthenticated() {
        return !!window.localStorage.getItem("loginToken");
    }

    logout() {
        console.log(2000000)
        window.localStorage.removeItem('loginToken')
        delete axios.defaults.headers.common['Authorization']
        window.location.reload(true)
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
            .then(response => {

                window.localStorage.setItem('loginToken', response.data.token);
                this.setAxiosDefaultAuthorizationHeader();
                return response;
            })

    }


}


export const auth = new Auth();
