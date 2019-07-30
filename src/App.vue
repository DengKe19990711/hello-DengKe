<template>
  <div id="app">
    Hello DengKe!
    <div>
      <!-- <router-link to = "/home">首页</router-link>
      <router-link to = "/list">列表</router-link>
      <router-link to = "/mine">我的</router-link> -->
     <router-link
        v-for="item in navs"
        v-bind:key="item.id"
        v-bind:to="item.path"
     >{{item.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
    .router-link-active{
        color:pink;
    }
    .router-link-exact-active{
      color:skyblue;
    }
</style>
  
<script>
export default {
  // mounted(){
  //   console.log(this)
  // }
  data(){
    return {
      navs:[
        {id:1,title:"首页",path:"/home"},
        {id:2,title:"列表",path:"/list"},
        {id:3,title:"我的",path:"/mine"}
      ]
    }
  }
}
</script>
