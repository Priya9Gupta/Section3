const express = require ('express');

const router = express.Router();

router.get('/add',(req,res)=>{
   
    res.send('response from product add')
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