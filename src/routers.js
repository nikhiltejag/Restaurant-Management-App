import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router