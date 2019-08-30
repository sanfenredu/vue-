
const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    user_name:String,
    password:String
})

module.exports=userSchema