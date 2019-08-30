const path = require('path');

// moudel.exports={
//     chainWebpack: config=>{
//         config.resolve.alias
//     }
// }
module.exports = {
    // 路径别名
    chainWebpack: config => { //config就是 cli3脚手架内部的webpack配置
        config.resolve.alias
            // .set(路径名，对应目录的磁盘路径)
            .set('components', path.join(__dirname, 'src/components'))
            .set('common', path.join(__dirname, 'src/components/common'))
            .set('layout', path.join(__dirname, 'src/components/layout'))
            .set('pages', path.join(__dirname, 'src/pages'))
            .set('lib', path.join(__dirname, 'src/lib'))
            .set('store', path.join(__dirname, 'src/store'))
            .set('router', path.join(__dirname, 'src/router'))
            .set('utils', path.join(__dirname, 'src/utils'))
            .set('assets', path.join(__dirname, 'src/assets'))
            .set('stylesheets', path.join(__dirname, 'src/assets/stylesheets'))
    },
    // 反向代理
    devServer: {
        open: true, //项目重启时，自动打开浏览器
        hot: true, //热重载
        proxy: { //反向代理
            // 反向代理的标识： 反向代理的配置
            // 这个反向代理的标识最好是目标地址的一个路径 
            // 举例： http://m.maoyan.com/ajax/movieOnInfoList?token=          标识: /ajax
            '/ajax': {
                target: 'http://m.maoyan.com', //代理的目标源
                changeOrigin: true, //是否修改目标源
            },
            // '/maoyan': {
            //   target: 'http://m.maoyan.com',
            //   changeOrigin: true,
            //   pathRewrite: { //路径重写
            //     '^/maoyan': '' //将/maoyan去掉
            //   }
            // }
            '/napi': {
                target: 'https://www.duitang.com',
                changeOrigin: true
            },
            //https://elm.cangdu.org/v1/pois?type=search&city_id=2&keyword=e
            '/v1':{
                target: 'https://elm.cangdu.org',
                changeOrigin:true,
            },
            //https://elm.cangdu.org/shopping/v2/restaurant/category
            '/shopping':{
                target: 'https://elm.cangdu.org',
                changeOrigin:true
            }
        }
    }
}