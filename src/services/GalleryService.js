import axios from 'axios'

export default class GalleryService{

    // kurs
    // constructor() {
    //     axios.defaults.baseURL = 'http://localhost:8000/api/'
    // }

    // kuci
    constructor() {
        axios.defaults.baseURL = "http://gallery-back.kev/api/";
    }

    getAll(){

        return axios.get("galleries");
    }

    getOne(id){

        return axios.get(`galleries/${id}`);

    }






}

export const galleryService = new GalleryService();