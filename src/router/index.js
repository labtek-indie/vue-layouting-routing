import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateProject from '@/components/Projects/CreateProject'
import Projects from '@/components/Projects/Projects'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'

Vue.use(Router)

/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/projects/newproject',
        name: 'CreateProject',
        component: CreateProject
    },
    {
        path: '/user',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/user/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/user/signup',
        name: 'SignUp',
        component: SignUp
    },
  ],
  mode:'history'
})
