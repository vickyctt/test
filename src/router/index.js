import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from "../pages/Home"
import Search from "../pages/Search"
import Login from "../pages/Login"
import Register from "../pages/Register"
// 保存VueRouter的原型对象的push/replace
let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
// 重写push/replace
VueRouter.prototype.push=function (location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function (location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search",
            // 路由组件可以传递props数据
            //布尔值写法
            // props:true
            // 函数写法  常用
            // props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        // 重定向,path值为*或/
        {
            path:'/',
            redirect:'/home'
        }
    ]
})