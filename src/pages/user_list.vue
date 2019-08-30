<template>
    <div>
        <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>

    </div>
</template>
<script>
import { Table} from 'iview'
    export default {
        components:{
            Table
        },
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '注册日期',
                        key: 'date'
                    },
                    {
                        title: '用户姓名',
                        key: 'name'
                    },
                    {
                        title: '注册地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                       
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        date: '2016-10-03'
                    },
                    {
                       
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 ',
                        date: '2016-10-01'
                    },
                    {
                        
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        date: '2016-10-02'
                    },
                    {
                        
                        name:'王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        date: '2016-10-04'
                    }
                ]
            }
        },
       
    }
</script>
