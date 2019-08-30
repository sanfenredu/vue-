/* 
  连接数据库
*/

const mongoose = require('mongoose')

const dbName = '1903'

const connect = {
  init () {
    mongoose.connect( `mongodb://127.0.0.1:27017/${ dbName }`,( error ) => {
      if( error ) {
        console.log( error )
      }else {
        console.log( `The database is connected success ~~` )
      }
    })
  }
}

module.exports = connect
