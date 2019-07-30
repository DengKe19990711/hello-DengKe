<template>
    <div class = 'home'>
        我是home！！！
        <ul>
            <router-link tag="li" to="/detail/1?title=A">向右转</router-link>
            <router-link tag="li" :to="{path:'/detail/2',query:{title:'新闻'}}">向左转</router-link>
        </ul>
    </div>
</template>

<style>

</style>

<script>
export default {
    
}
</script>
