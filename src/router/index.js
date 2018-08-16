import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import UsersList from '../components/users/List'
import CreateUser from '../components/users/Create'
import EditUser from '../components/users/Edit'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Hello
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register

        },
        {
            path: '/users/list',
            component: UsersList,
            name: 'List'

        },
        {
            path: '/users/create',
            component: CreateUser
        },
        {
            path: '/users/edit/:id',
            component: EditUser
        }
    ]
})