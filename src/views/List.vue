<template>
    <div class = 'list'>
        我是list！！
     <div>
         <router-link to="/list/w">点击A</router-link>
         <router-link to="/list/w2">点击B</router-link>
     </div>
     <router-view></router-view>
     <!-- <router-link
        v-for="item in navs"
        :key="item.id"
        :to="item.path"
     >{{item.title}}</router-link> -->
    </div>
    
</template>

<style>

</style>

<script>
export default {
    // data(){
    //     return {
    //         navs:[
    //             {id:1,title:"海琴烟",path:"w"},
    //             {id:2,title:"海闻香",path:"w2"}
    //         ]
    //     }
    // }
}
</script>
