<template>
    <div>
        <div id="main" style="width: 600px;height:400px;"></div>

    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    component:{
        echarts
    },
    mounted(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
     var option = {
                // title : {
                //     text: '某站点用户访问来源',
                //     subtext: '纯属虚构',
                //     x:'center'
                // },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['北京','深圳','上海','杭州','其他']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'北京'},
                            {value:310, name:'深圳'},
                            {value:234, name:'上海'},
                            {value:135, name:'杭州'},
                            {value:1548, name:'其他'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
             myChart.setOption(option);
    }

}
</script>

