import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/home'
import UserList from 'pages/user_list.vue'
import ShopList from 'pages/shop_list'
import AddShop from 'pages/add_shop'
import AddGoods from 'pages/add_goods'
import Visitor from 'pages/visitor'
import Edit from 'pages/edit'
import AdminSet from 'pages/admin_set'
import Explain from 'pages/explain'
import Error from 'pages/error'
import ShopEdit from 'pages/shop_edit'
import Login from  'pages/login.vue'
import Register from 'pages/register.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path: '/user_list',
        component: UserList,
    },
    {
        path: '/shop_list',
        component: ShopList
    },
    {
        path: '/shop_edit/:id',
        component: ShopEdit
    },
    {
        path: '/add_shop',
        component: AddShop
    },
    {
        path: '/add_goods',
        component: AddGoods,
    },
    {
        path: '/visitor',
        component: Visitor
    },
    {
        path: '/edit',
        component: Edit
    },
    {
        path: '/admin_set',
        component: AdminSet,
    },
    {
        path: '/explain',
        component: Explain
    },
    {
        path: '/error',
        component: Error
    },
    {
        path: '**',
        redirect: '/error'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router