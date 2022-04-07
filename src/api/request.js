// 对axios进行二次封装
import axios from "axios"
// 利用axios的create方法去创建一个axios实例
const requests=axios.create({
    // 基础路径，发请求时路径中会出现/api
    baseURL:"/api",
    // 代表请求超时时间
    timeout:5000,
})
// 请求拦截器：在发请求前，请求拦截器可以检测到，可在发送请求前处理一些事情
requests.interceptors.request.use(config=>{
    // config:配置对象，对象中有一个重要属性headers(请求头)
    return config
})
// 响应拦截器：
requests.interceptors.response.use(res=>{
    // 成功的回调函数：服务器响应的数据返回后，响应拦截器可以检测到，可做一些事
    return res.data
},error=>{
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

// 对外暴露
export default requests