import axios from 'axios'

export default class GalleryService{

    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll(){

        return axios.get('galleries');
    }

    getSingleGallery(id){

        return axios.get(`galleries/${id}`);

    }

    getSingleUserGalleries(){

        const TOKENUSER = `${window.localStorage.getItem('user')}`

        return axios.get(`my-galleries/${TOKENUSER}`)

    }

    getSingleAuthorGalleries(id){


        return axios.get(`author-galleries/${id}`)

    }

    addGallery(name,inputs,description){

        const USERID = `${window.localStorage.getItem('user')}`

        return axios.post('galleries',{
            name,
            inputs,
            description,
            USERID


        })

    }


}

export const galleryService = new GalleryService();