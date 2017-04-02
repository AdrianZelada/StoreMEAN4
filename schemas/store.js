/**
 * Created by iZel on 4/1/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Store = new Schema({
    name: String,
    nit:Number,
    cod:String,
    inventory:{
        type:Schema.ObjectId,
        ref:'Inventory'
    }
});

module.exports=mongoose.model('Store',Store);