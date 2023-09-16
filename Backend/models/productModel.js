const {Schema , model} =require('../connection');

const myschema = new Schema({
   name:String,
   //string type 
   brand:String,
   Model:String,
   price:Number,

});
model.export = model('product', myschema);























































































