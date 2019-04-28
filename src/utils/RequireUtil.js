import axios from 'axios'

//let loadingInstance; //创建Loading 的实例
axios.defaults.baseURL = appConfig.xhr.baseURL; // 配置axios请求的地址
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers={"Content-Type":"application/json"}

//配置发送请求前的拦截器 可以设置token信息
axios.interceptors.request.use(confing=>{
    //loadingInstance.start();
    return config;
},error => {
    //loadingInstance.close();
    return Promise.reject(error);
});

axios.interceptors.response.use(res=>{
    //这里面写所需要的代码
    if (res.data.code == '401') {
        //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
        return false;
    }
},error => {
    return Promise.reject(error);
})

export default axios;
