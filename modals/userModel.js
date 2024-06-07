const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
  name:{type:String,require},
   email:{type:String,require},
   password:{type:String,require},
   isAdmin:{type:Boolean,require,default:false}
},{
  timestamps:true,
})

const userSchemas=mongoose.Schema({
  email:{type:String,require},
   password:{type:String,require}
},{
  timestamps:true,
})

module.exports=mongoose.model("user",userSchemas)
module.exports=mongoose.model("users",userSchema)

