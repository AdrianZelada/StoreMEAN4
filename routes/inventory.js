/**
 * Created by iZel on 4/1/17.
 */
let express = require('express');
let router = express.Router();
let Inventory= require('../schemas/inventory');

let parent = require('../routes/service.resource');

module.exports = parent(router,Inventory);