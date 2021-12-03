// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)
import Home from  '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
//配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {show: true}
    }, {
      //代表params参数可传可不传
      path: '/search/:keyword?',
      component: Search,
      meta: {show: true},
      name: 'search',
      // 路由组件能不能传递props数据？
      //布尔值的写法： params
      //对象写法
      // props: true, //params
      // props: {a: 1, b: 2}
      // 函数写法：可以将params参数，query参数,通过props传递给路由组件
      props: ($route) => ({ keyword: $route.params.keyword , k: $route.query.k })
    }, {
      path: '/register',
      component: Register,
      meta: {show: false}

    },{
      path: '/login',
      component: Login,
      meta: {show: false}
    },{
      //重定向：当项目跑起来的时候，访问/，立马让它定向到首页
      path: '/',
      redirect: '/home'
    }
  ]
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}