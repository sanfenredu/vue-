<template>
    <div class="home-container">
        <home-header></home-header>
        <home-content></home-content>
    </div>
</template>
<script>
    import HomeHeader from './HomeHeader'
    import HomeContent from './HomeContent'

    export default {
        components:{
            HomeContent,HomeHeader
        },
         beforeRouteEnter(to, from, next) {
        if(!cookie.get('user_name')){
            next('/login')
        }
        next();
    },
    }
</script>
<style lang="stylus" scoped>

</style>
