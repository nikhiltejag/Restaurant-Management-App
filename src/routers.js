import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home'
import SignUp from './components/SignUp'

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
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router