const mongoose=require('mongoose')

const Schema=mongoose.Schema

const orderSchema=new Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    items:{type:Object, required:true},
    phone:{type:Number,required:true},
    paymentMod:{type:String,default:'COD'},
    address:{type:String,required:true} ,
    status:{type:String,default:'Order_Placed'} 
},{timestamps:true})
module.exports=mongoose.model('order',orderSchema)