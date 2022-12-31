import axios from 'axios'
import initAdmin from './admin'
let addToCart=document.querySelectorAll('.add-to-cart')
let cartCounter=document.querySelector('#cartCounter')
console.log("Inside the Script")
import AWN from "awesome-notifications"
let globalOptions =  {}
let notifier = new AWN(globalOptions)



function updateCart(pizza){
    axios.post('/update-cart',pizza).then((res)=>{
        console.log(res)
        cartCounter.innerText=res.data.totalQty;
        notifier.success("Pizza Added to the Cart")
    })
}
addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let pizza=JSON.parse(btn.dataset.pizza);
        updateCart(pizza)
        console.log(pizza)
    })
})
const orderAlert=document.querySelector('#success-alert')
console.log(orderAlert,"Order Alerttt")

if(orderAlert){
    setTimeout(()=>{
        orderAlert.remove()
    },2000)
}

initAdmin();