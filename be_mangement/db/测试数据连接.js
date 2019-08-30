/* 
  用来做数据库的连接和暴露操作
*/

const connect = require( './connect' )
const { shopSchema } = require('./schema')
const { shopModel  } = require('./model')

// 1. 连接数据库

connect.init()

// 2. 创建骨架

// 3. 引入模型

// 4. 统一暴露db数据库模块

const db = {
  shop: { // 这个就是关于shop的增删改查
    add () { // 增
      // 测试
      let shop = new shopModel() //实例化模型得到实体
      shop.shop_name = 'Gabriel Yan'
      shop.save(( error ) => {
        if( error ){
          console.log( error )
        }else {
          console.log('The data success saved ~~~')
        }
      })
    },
    delete () { // 删

    },
    modify () { // 改

    },
    query () { //  查

    }
  }
}



module.exports = {
  shop: db.shop
}
