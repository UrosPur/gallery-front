import axios from 'axios'

export default class Auth {

    // kurs
    // constructor() {
    //     axios.defaults.baseURL = 'http://localhost:8000/api/'
    // }

    // kuci
    constructor() {
        axios.defaults.baseURL = "http://gallery-back.kev/api/";
    }

    login (email,password) {
        return axios.post(`login`,{ email,password})
            .then(response => {

                // console.log(response.data.token)

                window.localStorage.setItem('loginToken',response.data.token)
                this.setAxiosDefaultAuthorizationHeader()



            })


    }


}


export const auth = new Auth()