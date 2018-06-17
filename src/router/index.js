import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Galleries from '../pages/Galleries'
import SingleGallery from '../pages/SingleGallery'
import MyGallery from '../pages/MyGallery'
import CreateGallery from '../pages/CreateGallery'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/galleries', name:'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/galleries', component: Galleries, name: 'galleries'},
    {path: '/gallery/:id', component: SingleGallery, name: 'single-gallery'},
    {path: '/my-galleries', component: MyGallery, name: 'my-gallery'},
    {path: '/create-gallery', component: CreateGallery, name: 'create-gallery'},
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router