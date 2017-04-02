/**
 * Created by iZel on 4/1/17.
 */

let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Inventory = new Schema({
    products:[{
        type:Schema.ObjectId,
        ref:'Product'
    }],
    storeKey:{
        type:Schema.ObjectId,
        ref:'Store'
    }
});

module.exports=mongoose.model('Inventory',Inventory);