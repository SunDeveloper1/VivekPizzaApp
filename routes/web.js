// ALl Web realted routes
// This File is only for routes
// Logic For Routes is stored in Controlllers
const homeControllers=require('../app/http/controllers/homeController')
const authControllers=require("../app/http/controllers/authController")
const cartControllers=require("../app/http/controllers/customers/cartController")
const orderController=require("../app/http/controllers/customers/orderController")
const adminOrderController=require("../app/http/controllers/admin/adminOrderController.js")
const statusController=require("../app/http/controllers/admin/statusController.js")

const auth=require('../app/http/middleware/auth')
function initRoutes(app){
    
    //--Home Route
    app.get('/',homeControllers().index)

    //--Cart Route
    app.get('/cart',cartControllers().openCart)

    //--Login Route
    app.get('/login',authControllers().login)
    app.post('/login',authControllers().postlogin)
    //--Registration Route
    app.get('/register',authControllers().register)


    app.post('/update-cart',cartControllers().update)

    app.post('/register', authControllers().postRegister)

    //-- Customer Routes
    app.post('/order',auth,orderController().postOrder)
    app.get('/customer/order', auth,orderController().index)

    //--Admin Routes
    app.get('/admin/order', adminOrderController().index)
    
    app.post('/admin/order/status', statusController().index)












    //POST Registration
    app.post('/registers',(req,res)=>{
        // We Will not Write Whole Logic Here
        //    Code Will Get Mashed Up
        //       We Will Transfer the Logic into home controllers

    })

    app.get('/logout',(req,res)=>{
        delete req.user
        res.redirect('/login')
    })
}


module.exports=initRoutes