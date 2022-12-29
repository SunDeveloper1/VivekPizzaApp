const mongoose=require('mongoose')

let db_url="mongodb://localhost:27017/pizza"
mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true })

const connection=mongoose.connection

connection.once('open',()=>{
    console.log("Datbase Connected Successfully")
}).on('error',()=>{
    console.log("Connection Failed")
})

module.exports=connection;