/* 
  这是关于shop 商家的骨架
*/
const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema 

// const shopSchema = new Schema( options ) // options用来定义字段 
const shopSchema = new Schema({
  shop_name: String, // 店铺名称
  shop_address: String, // 店铺地址
  phone_number: String, // 电话号码
  shop_info: String, // 店铺介绍
  shop_slogan: String, // 店铺标语
  shop_category: String, // 店铺分类
  shop_feature: String,  // 店铺特点
  shop_feature_flag_0: Boolean,
  shop_feature_flag_1: Boolean,
  shop_feature_flag_2: Boolean,
  shop_feature_flag_3: Boolean,
  shop_feature_flag_4: Boolean,
  shop_feature_flag_5: Boolean,
  shop_area:String,
  delivery_cost: Number, // 配送费
  shop_hours: String, // 营业时间
  shop_logo: String, // 店铺logo
  business_license: String, // 营业许可证
  catering_license: String,  // 餐饮服务许可证
  filename: Array
}) // options用来定义字段 



module.exports = shopSchema