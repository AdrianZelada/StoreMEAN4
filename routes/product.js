/**
 * Created by iZel on 4/1/17.
 */
let express = require('express');
let router = express.Router();
let Product= require('../schemas/product');

let parent = require('../routes/service.resource');

module.exports = parent(router,Product);