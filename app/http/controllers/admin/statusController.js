const Order = require("../../../models/order");


function statusController(){
        console.log("inside the statusController");
        return{
            index(req,res){
                console.log('orderId',req.body.orderId)
                console.log('status',req.body.status)
                Order.updateOne({phone:12345677898}, {status:req.body.status},(err,data)=>{
                    if(err){
                        return res.redirect('/admin/order')
                    }
                    console.log('update successfully')
                    res.redirect('/admin/order')
                })
            }
        }
}

module.exports=statusController;