
const { ProductPImageSchema } =require('./ProductPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


pImage:  
ProductPImageSchema
 , 


pTitle:String , 


pCount:Number , 


pSupplier:  
  {
    type: Schema.Types.ObjectId,
    ref:'supplier'
  }

 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

