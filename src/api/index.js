// 统一管理api接口
import requests from "./request";

// 三级联动接口（全局组件）
// /api/product/getBaseCategoryList get 无参数
// axios发送请求，返回promise对象
export const reqCategoryList=()=>requests({url:"/product/getBaseCategoryList",method:'get'})
