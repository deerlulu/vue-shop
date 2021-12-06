1:编程式路由跳转到当前路由（参数不变），多次执行会抛出NavgationDuplicated的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误呢？
  "vue-router": "^3.5.3"：最新的vue-router引入了promise

  function push() {
    return new promise((resolve,reject) => {

    })
  }
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决

1.3通过底部的代码，可以实现解决这个错误
  this.$router.push({name: 'search', params: { keyword }, query: {k: keyword.toUpperCase()}},()=>{},()=>{})
  这种写法：治标不治本，将来在别的组件中push|replace，编程式导航还是有类似的错误

1.4
  this:当前组件实例（search）
  this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
  push：VueRouter类的一个实例

  function VueRouter() {

  }
  //原型对象的方法
  VueRouter.prototype.push = function() {
    //函数的上下文为VueRouter类的一个实例
  }
  let $router = new VueRouter();

  $router.push(xxx)

  2.Home组件模块组件
  --先完成静态页面
  --拆分出静态组件
  --获取服务器数据进行展示
  --动态业务

  3.三级联动组件
  --由于三级联动，home，search,detail模块都出现了,所以可以封装成一个组件
  4.完成其余组件的拆分

  5.postman测试接口
  /api/product/getBaseCategoryList
  --刚刚经过postman测试,接口没有问题，数据正常返回，code:200代表服务器返回数据成功
  --整个项目接口的前缀都有api

  6.axios二次封装
    XMLHttpRequest fetch jq axios
  6.1 为什么需要axios二次封装
  请求拦截器：在发请求之前处理一些业务
  响应拦截器：当服务器数据返回以后，可以处理一些事情

  6.2在项目中经常有API文件夹【axios】
  接口中：路径中都带有/api
  baseURL: "/api"
  
  6.3 axios基础不好，参考git或者axios文档

  7.接口统一管理
  项目很小：完全可以在组件的生命周期函数中去发请求

  项目大：axios.get('xxxx')
  7.1跨域问题
  什么是跨域问题：协议，域名，端口不同
  http://localhost:8080/#/home 前端的服务器

  http://39.98.123.211 服务器