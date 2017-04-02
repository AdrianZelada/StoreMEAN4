/**
 * Created by iZel on 4/1/17.
 */

let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let TypeProduct = new Schema({
    name: String,
});

module.exports=mongoose.model('TypeProduct',TypeProduct);