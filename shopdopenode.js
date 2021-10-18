const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
// const home = fs.readFileSync('shopdope.html');
const path= require('path');


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.use( express.static( "public" ) );

app.get('/',(req,res)=>{
    res.render("shopdope");
})

app.get('/mobiles',(req,res)=>{
    res.render("mobiles");
})

//const hostname='127.0.0.1';
const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})
