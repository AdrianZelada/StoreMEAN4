/**
 * Created by iZel on 4/1/17.
 */
let express = require('express');
let router = express.Router();
let Field= require('../schemas/field');

let parent = require('../routes/service.resource');

module.exports = parent(router,Field);
