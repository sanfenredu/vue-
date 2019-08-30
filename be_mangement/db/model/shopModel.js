/* 
  * shop 商家的模型
*/
const mongoose = require('mongoose')
const {shopSchema} = require('../schema')

// const shopModel = mongoose.model( 集合的名称，骨架 )
const shopModel = mongoose.model( 'shops', shopSchema )


module.exports = shopModel