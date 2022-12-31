//Factory Functions
//Factory:-Simple Function which returns Object
const Menu=require('../../models/menu')
function homeControllers(){
    return {
       //CRUD CONTROLLER
       async index(req,res){
       const pizzas=await Menu.find()
       //-Old Method implementation
        // Menu.find().then((pizzas)=>{
        //     console.log(pizzas);
        //     return res.render('home',{pizzas:pizzas})
        // })
        return res.render('home',{pizzas:pizzas})
        
            
       } 
    }
}
module.exports=homeControllers