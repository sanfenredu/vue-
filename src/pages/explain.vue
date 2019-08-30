<template>
    <div style="background:#eee;padding: 20px">
       <Card :bordered="false">
            <p slot="title"> 描述 </p>
            <p> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
        </Card>
        <Card :bordered="false">
            <p slot="title"> 后台管理系统的描述 </p>
            <p> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
        </Card>
        <Card :bordered="false">
            <p slot="title"> 此后台管理系统的应用技术栈 </p>
            <p> vue vue-router vuex cli3 webpack vue-loader 。。vue全家桶 </p>
            <p> webpack </p>
            <p> Node.js </p>
            <p> express </p>
            <p> mongodb </p>
            <p> mongoose </p>
        </Card>
    </div>
</template>
<script>
import {Card} from 'iview'
export default {
    components:{
        Card
    }
}
</script>

