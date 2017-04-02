/**
 * Created by iZel on 4/1/17.
 */

let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Field = new Schema({
    name: String,
    type: String
});

module.exports=mongoose.model('Field',Field);