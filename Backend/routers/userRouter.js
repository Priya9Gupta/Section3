const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();

//when we use get result show on browser
//post cant see in a browser
//API AND REST API = ?

router.post('/add',(req,res)=>
{
    console.log(req.body);
    res.send('respone from user add')
});
router.get('/getall',(req,res)=>
{
    res.send('respone from user getall')
});
router.get('/update',(req,res)=>
{
    res.send('respone from user update')
});
router.get('/delete',(req,res)=>
{
    res.send('respone from user delete')
});
router.get('/getbyid',(req,res)=>
{
    res.send('respone from user getbyid')
});


module.exports= router;