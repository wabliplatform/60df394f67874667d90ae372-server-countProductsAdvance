
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
Underscoreid:String , 


sName:String , 


sContact:String 



})

module.exports = {
  Supplier : mongoose.model('supplier', supplierSchema),
}

