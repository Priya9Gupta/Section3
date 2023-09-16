//step 1 backend
//step 2 npm init -y
//step 3 installed package.json
//step 4 npm install mongoose, install mongoose in index.js
//step 5 npm i express,......



// import express
//mongoose is a framework
//mogoDB is a database
//change js to json & vice versa

const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
// initialize express
const app = express();
const port = 5000;
//Middleaware
app.use (express.json());
app.use( '/user',userRouter);
app.use('/product',productRouter);

// starting the server

// EXPRESS IS A BACKEND FRAMEWORK
app.get('/',(req, res)=>{
    res.send('response from express');
});
app.get('/add',(req,res)=>{
    res.send('response from add');
});
app.get('/getall',(req,res)=>{
    res.send('response from getall');
});
app.get('/update',(req,res)=>{
    res.send('response from update');
});
app.get('/getbyid',(req,res)=>{
    res.send('response from getbyid');
});

app.listen(port,()=>{
    console.log('server started')});