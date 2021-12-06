// 对axios进行二次封装
import axios from 'axios'

//1.利用axios对象的方法create创建一个axios实例
//2.request：就是axios，只不过需要稍微配置一下
const requests = axios.create({
  //配置对象
  //基础路径，发请求的时候，路径当中回出现api，不需要挨个手写
  baseURL: "/api",
  //设置请求超时时间
  timeout: 5000,
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //config:配置对象，对象中有一个属性很重要，headers请求头
  return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
  //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到
},(error) => {
  //响应失败的回调函数
  //中止promise链
  return Promise.reject(new Error("fail"))
})

export default requests;
