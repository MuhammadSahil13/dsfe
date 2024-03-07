const cookieSession = require('cookie-session');
const express=require('express')
const app=express();
app.use(cookieSession)
app.listen("5000",()=>{
    console.log("server is running")
})