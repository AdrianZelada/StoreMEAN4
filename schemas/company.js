/**
 * Created by iZel on 4/1/17.
 */

let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Company = new Schema({
    name: String,
    cod:String,
    nit:Number
});

module.exports=mongoose.model('Company',Company);