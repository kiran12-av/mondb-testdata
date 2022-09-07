const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
cuid:{
    type:String,
    required:false,
},

application_name:{
    type:String,
    
},

status:{
    type:String,
    
},

issue_description:{
    type:String,
},

date:{
    type:Date,
    default:Date.now
},


Data_Type:{
    type:String,
    required:true,
    
},


Environment:{
    type:String,
    
   
},

Order_Id:{
    type:String,
    required:true,
    
   
},

POC:{
    type:String,
    required:true,
    
   
}

})


module.exports=mongoose.model('Posts',PostSchema)