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

注意想要组件识别less样式，需要在style标签上lang='less'
