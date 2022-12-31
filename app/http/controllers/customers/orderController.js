const Order=require('../../../models/order')
const moment=require('moment')
console.log(Order,'\n Order Schema')
function orderController(){
    return{
        postOrder(req,res){
            
            const {number, address}=req.body
            console.log(number,address)
            if(!number || !address){
                req.flash('error', 'All field are required')
            }
            const order=new Order({
                customerId:req.user._id,
                items:req.session.cart.items,
                phone:number,
                address:address,

            })
            order.save().then(res=>{
               req.flash('success', 'Order Placed successfully') 
               delete req.session.cart;
               return res.redirect('/')

            }).catch(err=>{
                req.flash('error','Something went wrong')
                return res.redirect('/customer/order')
            })

            
        },
        async index(req,res){
            const orders=await Order.find({customerId:req.user._id});
            console.log('Order details for customers')
            console.log(orders)
            res.render('customers/order', {orders:orders,moment:moment})
            
        }
    }
}

module.exports=orderController