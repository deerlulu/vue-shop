node_modules文件夹：项目依赖文件夹

pubilc文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，
会原封不动打包到dist文件夹中

src文件夹（程序员代码文件夹）：

  assets文件夹： 一般也是放置静态资源（一般放置多个组件公用的静态资源），需要注意，放置在assets文件夹里面的
  静态资源，在webpack打包的时候，webpack会把静态资源当做一个模块，打包到js文件里面。

  components文件夹：一般放置非路由组件（全局组件）

  App.vue：唯一的根组件，vue中的组件（.vue）
  main.js：程序入口文件，也是整个程序中最先执行的程序

babel.config.js：配置文件（babel相关）
package.json: 认为项目”身份证“,记录项目叫什么，项目当中有哪些依赖，项目怎么运行
package-lock.json：缓存性文件

README.md:说明性文件

项目其他配置：
2.1 项目运行起来的时候，让浏览器自动打开
---package.json

 "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
2.2 eslint校验功能关闭
---在根目录下，创建一个vue。config.js
比如：声明变量，但是没有使用，eslint工具就会报错

2.3 src文件夹简写方法，配置别名

jsconfig.json配置别名@提示 [@代表的是src文件夹，这样将来文件过多，找的时候方便很多]

{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}

3.项目的路由分析
v-router
前端所谓路由：KV键值对
key:url（地址栏中的路径）
value:相应的路由组件
注意：项目上中下结构

路由组件：
home首页的路由组件，search路由组件,login路由，Register注册路由

非路由组件：
Header 
Footer【在首页、搜索页有，登录｜注册页面没有】

4.完成非路由组件header，footer
(1)书写静态页面（html+css）
(2)拆分组件
(3)获取服务器的数据动态展示
(4)完成相依的动态业务逻辑

注意1:创建组件的时候 组件结构+组件样式+图片资源

注意2:咱们项目采用的less样式，浏览器不是别less样式，需要通过less,less-loader(安装5版本的)进行处理
less,把less样式变为css样式，浏览器才可以识别

注意3:想要组件识别less样式，需要在style标签上lang='less'

4.1使用组件的步骤（非路由组件）
-创建或者定义
-引入
-注册
-使用

5.路由组件的搭建
vue-router
在上面分析的时候，路由组件应该有4个：Home Search Login Register

5.1配置路由
项目中配置的路由 ---router文件夹

5.2 总结
路由组件与非路由组件的区别

1:路由组件一般放置在pages｜views文件夹，非i路由组件放在components文件夹中
2:路由组件一般需要在router文件夹中进行注册（使用的是组件的名字），非路由组件一般使用标签
3:注册完路由，不管是路由组件还是非路由组件，身上都有$route、$router属性

$route: 一般获取路由信息【路径，query，params等等】
$router：一般进行编程式导航进行路由跳转【push|replace】

5.3 路由的跳转
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由跳转

编程式导航：声明式导航能做的，编程式导航都能做，但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

6.footer组件的显示与隐藏
footer组件： 在home和search页面显示,在login和register组件不显示

6.1 可以使用 v-show="$route.path == '/home' || $route.path == '/search'"判断footer的显示与隐藏

6.2 配置路由的时候，可以给路由添加路由元信息，key必须是meta

7.路由传参 

7.1路由跳转有几种方式：
A--B
声明式导航router-link（务必要有to属性）,可以进行路由的跳转
编程式导航：利用$router.push|replace,可以进行路由跳转

7.2路由传参,参数有几种写法？
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径当中的一部分，类似于ajax中的queryString /home?k=v&k=v

8. 路由传参相关面试题
(1)路由传递参数（对象写法）path是否可以结合params参数一起使用?
    答：路由跳转传参的时候，对象的写法可以是name，path形式。但是需要注意的是:path这种写法不能与params参数一起使用
(2)如何指定params参数可传可不传？
    比如：配置路由的时候，占位了（params参数）,但是路由跳转的时候就不传递。
    路径就会出现问题
    http://localhost:8080/#/?k=SHA

    如何指定params可传可不传？
    在配置路由的时候，在占位的后面加上一个问号，就可以确定url是正确的

(3)params参数可以传递也可以不传递，但是如果传递的是空串，如何解决？
    this.$router.push({name: 'search', params: { keyword: '' }, query: {k: keyword.toUpperCase()}})
    路径就会出现问题
    http://localhost:8080/#/?k=DA%20SA

    如何解决：undefined
    this.$router.push({name: 'search', params: { keyword: '' || undefined }, query: {k: keyword.toUpperCase()}})
    http://localhost:8080/#/search?k=DSAAA

(4)路由组件能不能传递props数据？