const express = require('express')
require('dotenv').config();
// Express is an Function
const app = express(); // Fun returns an Objects which contains all the functionality of express
const ejs = require('ejs');
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const session=require('express-session')
const flash=require('express-flash')
const PORT = process.env.PORT || 3000;
const mongoose=require('./mongodb')
const initRoutes=require('./routes/web')
const MongoDbStore=require('connect-mongo')(session);
const passport=require('passport')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//-- To Tell Express which template engoine we are using and views location

// ToDo
// 1.Telling Which Engine to use
// 2.Telling the path of the template views
let mongoStore=new MongoDbStore({
    mongooseConnection:mongoose,
    collection:'sessions'
})
app.use(session({
    secret:process.env.SECRET_KEY,
    resave: false,
    store:mongoStore,
    saveUninitialized: true,
    cookie: { maxAge: 1000 *60*60*24 }
    // Time in MilliSeconds -24 Hours 
}))

app.use(flash())

// Passport config
const passportInit=require('./app/config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(expressLayouts)
app.set('views', path.join(__dirname + '/resources/views'))
app.set('view engine', 'ejs')// ejs should be in strings
//----------------------------------------------------//
app.use(express.static('public'))

app.use((req,res,next)=>{
   
    res.locals.session=req.session,
    res.locals.user=req.user
    next()
})

// app.get('/', (req, res) => {
//     // res.send("<h1>Welcome to Home Page</h1>")
//     //res.render('template path') to render the html page
//     res.render('home')
//     // We dont need to specify full path becz we already told express the path to views

// })
//-cart navigation


initRoutes(app);
app.listen(PORT, () => {

    console.log("Express arrived at 3000")
})
