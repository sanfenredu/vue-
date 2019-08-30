<template>
    <div class="home-header-container">
        <h3> 数据统计 </h3>
        <Tabs>
        <TabPane label="当日数据" icon="ios-analytics-outline">
             <Button type="info"> 新增用户 </Button>
             <Button type="info"> 新增订单 </Button>
             <Button type="info"> 新增管理员 </Button>
        </TabPane>
        <TabPane label="总数据" icon="ios-apps-outline">
            <Button type="info"> 注册用户 </Button>
            <Button type="info"> 订单 </Button>
            <Button type="info"> 管理员 </Button>
        </TabPane>
        
    </Tabs>
    </div>
</template>
<script>
    import { Tabs,TabPane,Button, } from "iview";
    export default{
        components:{
            TabPane,Tabs,Button
        }
    }
</script>
<style lang="stylus">
    
    .home-header-container
       
        h3
            text-align  center
            font-size  20px
            font-weight bold
            margin-bottom  10px
        .ivu-btn-info
          margin-right 30px
</style>


