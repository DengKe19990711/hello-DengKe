<template>
    <div class="detail">
        我是想请页面detail！！
        {{$route.params.id}}
        {{$route.query.title}}
    </div>
</template>
<style>

</style>
<script>
export default {
    mounted(){
        console.log(this.$route.params.id,this.$route.query.title)

        // axios.get("",{id}).then(res=>{ //把参数id传过去 返回params对象
        //     //渲染id为1 这边文章数据(前提必须知道这个id是几)
        // })
    }
}
</script>

