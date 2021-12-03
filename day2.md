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