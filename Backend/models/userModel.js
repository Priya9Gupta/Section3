// const mongoose = require('../connection');
//model and schema present in a mongoose folder
const {Schema , model} =require('../connection');

const myschema = new Schema({
   name:String,
   //string type 
   email:String,
   password:String,

});
model.export = model('user', myschema);




