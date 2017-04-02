/**
 * Created by iZel on 4/1/17.
 */

let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Product = new Schema({
    name: String,
    cod: String,
    typeProduct:{
        type:Schema.ObjectId,
        ref:'TypeProduct'
    },
    companyKey:{
        type:Schema.ObjectId,
        ref:'Company'
    },
    details:[
        {
            field:{
                type:Schema.ObjectId,
                ref:'Field'
            },
            value:String
        }
    ],
    price:Number,
    stock:Number,
    inventoryKey:{
        type:Schema.ObjectId,
        ref:'Inventory'
    }
});

module.exports=mongoose.model('Product',Product);