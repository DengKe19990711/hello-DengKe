import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Home from "@/views/Home"  //创建
// import Mine from "@/views/Mine"
// import List from "@/views/List"
 const router = new Router({
  routes: [  //配置路由  
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home")},   //注册
    {path:"/list",component:()=>import("@/views/List"),children:[
      {path:"",redirect:"w"},
      {path:"w",component:()=>import("@/views/Chinese")},
      {path:"w2",component:()=>import("@/views/Hongkong")}
    ]},
    {path:"/mine",component:()=>import("@/views/Mine")},
    {path:"/detail/:id",component:()=>import("@/views/Detail")}
  ]
})

export default router;
