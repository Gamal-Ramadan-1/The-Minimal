import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import BlogPost from '../views/BlogPost.vue'
import BlogRightSideBar from '../views/BlogRightSideBar.vue'
import BlogLeftSideBar from '../views/BlogLeftSideBar.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/BlogPost',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/BlogRightSideBar',
      name: 'BlogRightSideBar',
      component: BlogRightSideBar
    },
    {
      path: '/BlogLeftSideBar',
      name: 'BlogLeftSideBar',
      component: BlogLeftSideBar
    },
  ]
})

export default router
