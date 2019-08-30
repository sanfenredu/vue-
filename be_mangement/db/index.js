/* 
  用来做数据库的连接和暴露操作
*/

const connect = require( './connect' )
const { shopSchema } = require('./schema')
const { shopModel  } = require('./model')
const { userSchema }=require('./schema')
const { userModel }=require('./model')

// 1. 连接数据库

connect.init()

// 2. 创建骨架

// 3. 引入模型

// 4. 统一暴露db数据库模块

const db = {
  shop: { // 这个就是关于shop的增删改查
    add ( data ) { // 增
        console.log(data)
      return new Promise( ( resolve,reject ) => {

        let shop = new shopModel( data ) 
  
        // 存储时，要进行判断，判断shop 商家名称是否已经存在了
  
        // 遍历数据库，查询当前数据库中的数据  shop_name  phone 两个是否是一样的
  
        shopModel.find({},( error,docs ) => {
          if( docs ) {
            // 如果条件成立，证明是有数据存在的
            let f = true 
            docs.forEach( item => {
              if( item.shop_name === data.shop_name && item.phone_number === data.phone_number){
                //数据库中已经有这条数据了，那就不应该在存储了
                f = false 
                return 
              }
            })
  
            if( f ) {
              shop.save((error) => {
                if( error ){
                  console.log( error )
                }else{
                 resolve( 1 )  // 1表示商家添加成功
                }
              })
            }else{
             resolve( 0 ) // 0 表示商家名称已经存在，需要更改名称
            }
          }
        })
  
        // shop.save()
      })
    },
    delete ( id ) { // 删
        return new Promise(( resolve,reject )=>{
          shopModel.findById( id, (error,docs )=>{
            console.log(docs)
            console.log(id)
            if( docs ){
              docs.remove( (error )=>{
                if(error){
                  resolve(0)
                }else{
                  resolve(1)
                }
              })
            } 
          })
        })
    },
    modify ( data ) { // 改
      console.log(data)
        return new Promise ( (resolve ,reject )=>{
           let shop =new shopModel (data)
           shopModel.find({},(error,docs)=>{
             docs.forEach( item=>{
               if( item._id===data._id){
                docs.remove()
               }
             })
             shop.save( (error)=>{
               if(error){
                 console.log(error)
               }else{
                 resolve(1)
               }
             })

           })
        })
    },
    query () { //  查
      return new Promise( ( resolve,reject ) => {
        shopModel.find({},( error,docs ) => {
          resolve( docs )
        })
      })
    },
    queryById( id ){
      return new Promise( ( resolve,reject ) => {
        shopModel.find({ _id:id},( error,docs ) => {
          resolve( docs )
        })
      })
    }
  },
  user:{
    add ( data ) { // 增
        console.log(data)
      return new Promise( ( resolve,reject ) => {

        let user = new userModel( data ) 
  
        // 存储时，要进行判断，判断用户名是否已经存在了
  
        // 遍历数据库，查询当前数据库中的数据  user_name是否是一样的
  
        userModel.find({},( error,docs ) => {
          if( docs ) {
            // 如果条件成立，证明是有数据存在的
            let f = true 
            docs.forEach( item => {
              if( item.user_name === data.user_name ){
                //数据库中已经有这条数据了，那就不应该在存储了
                f = false 
                return 
              }
            })
  
            if( f ) {
              user.save((error) => {
                if( error ){
                  console.log( error )
                }else{
                 resolve( 1 )  // 1表示用户名添加成功
                }
              })
            }else{
             resolve( 0 ) // 0 表示用户名已经存在，需要更改名称
            }
          }
        })
  
        // shop.save()
      })
    },
    query( data ){
      console.log( 'data',data)
      return new Promise( ( resolve,reject ) => {
        userModel.find({ },( error,docs ) => {
          console.log('docs',docs)
          if( docs){
            let f=false
            docs.forEach( item =>{
              if(item.user_name===data.user_name && item.password===data.password ){
                    f=true
              }
            })
            if( f ){
               if( error ){
                 console.log(error)
               }else{
                 resolve(1)
               }
            }else{
              resolve(0)
            }
          }
          
        })
      })
    },
    find(){
      return new Promise( ( resolve,reject ) => {
        userModel.find({},( error,docs ) => {
          resolve( docs )
        })
      })
    }

  }
}



module.exports = {
  shop: db.shop,
  user:db.user
}
