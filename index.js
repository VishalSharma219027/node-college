const express = require('express');
const app = express();
const path = require('path');
const user = require('./routes/user');
app.use(user);
const connect = require('./connection')
connect();
app.set("views",path.resolve("./views"))
app.listen(3000,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("server is running on  port no 3000")
        app.set('view engine','ejs');
    }
})
