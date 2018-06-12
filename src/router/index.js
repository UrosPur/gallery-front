import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login'
import Register from '../pages/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component:Login, name:'login' },
    { path: '/register', component:Register, name:'register' },
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router