import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../pages/Layout.vue"
import Login from "../pages/Login.vue"
import UCenter from "../pages/UCenter.vue"
import Messagelist from "../pages/Messagelist.vue"
import Notification from "../pages/Notification.vue"
import Page400 from "../pages/errorPage/400.vue"
import Page401 from "../pages/errorPage/401.vue"
import Page404 from "../pages/errorPage/404.vue"
import Provider from "../pages/provider/ProviderHome.vue"
import MyEquipmentList from "../pages/provider/main/MyEquipmentList.vue"
import MyEquipmentDetails from "../pages/provider/main/MyEquipmentDetails.vue"
import equipmentlist from '../pages/User/Equipmentlist.vue';
import applylist from '../pages/User/Applylist.vue';
import borrowlist from '../pages/User/Borrowlist.vue';
import BorrowApplyList from "../pages/provider/main/BorrowApplyList.vue"
import LendList from "../pages/provider/main/LendList.vue"
import Admin from "../pages/admin.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin
    },
    {
        path: "/",
        name: "Layout",
        redirect: {
            path: '/equipmentlist'
        },
        component: Layout,
        children: [
            {
                path: "/ucenter",
                name: "UCenter",
                component: UCenter,
                meta: {
                    isLogin: true
                }
            },
            {
                path: "/messagelist",
                name: "Messagelist",
                component: Messagelist,
                meta: {
                    isLogin: true
                }
            },
            {
                path: "/notification",
                name: "Notification",
                component: Notification,
                meta: {
                    isLogin: true
                }
            },
            {
                path: "/equipmentlist",
                name: "equipmentlist",
                component: equipmentlist,
                meta: {
                    isLogin: true,
                },
            },
            {
                path: "/applylist",
                name: "applylist",
                component: applylist,
                meta: {
                    isLogin: true
                }
            },
            {
                path: "/borrowlist",
                name: "borrowlist",
                component: borrowlist,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/provider',
                name: 'Provider',
                component: Provider,
                meta: {
                    isLogin: true,
                    isProvider: true
                },
                children: [
                    {
                        path: '/provider/myequipmentlist',
                        name: 'MyEquipmentList',
                        component: MyEquipmentList,
                        meta: {
                            isLogin: true,
                            isProvider: true
                        },
                    },
                    {
                        path: '/provider/myequipmentdetails',
                        name: 'MyEquipmentDetails',
                        component: MyEquipmentDetails,
                        meta: {
                            isLogin: true,
                            isProvider: true
                        },
                    },
                    {
                        path: '/provider/borrowapplylist',
                        name: 'BorrowApplyList',
                        component: BorrowApplyList,
                        meta: {
                            isLogin: true,
                            isProvider: true
                        },
                    },
                    {
                        path: '/provider/lendlist',
                        name: 'LendList',
                        component: LendList,
                        meta: {
                            isLogin: true,
                            isProvider: true
                        },
                    }
                ]
            },


        ]
    },
    {
        path: '/401',
        name: 'page401',
        component: Page401,
    },
    {
        path: '/404',
        name: 'page404',
        component: Page404,
    },
    {
        path: '/400',
        name: 'page400',
        component: Page400,
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        // 是否登陆
        const token = localStorage.getItem('token')
        // console.log(token)
        if (!token) {
            next({
                //回到登录页面
                path: "/login"
            })
        }
        else {
            //部分页面provider才可以访问
            if (to.meta.isProvider) {
                // 是否是provider
                const isProvider = localStorage.getItem('isProvider')
                // console.log(isProvider)
                if (isProvider!="true") {
                    // console.log(isProvider)
                    next({
                        //回到首页
                        path: "/"
                    })
                }
                else{
                    next()
                }
            }
            else{
                next()
            }
        }
    }
    else{
        next()
    }


})


export default router
