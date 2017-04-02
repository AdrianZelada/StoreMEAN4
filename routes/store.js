/**
 * Created by iZel on 4/1/17.
 */
let express = require('express');
let router = express.Router();
let Store= require('../schemas/store');

let parent = require('../routes/service.resource');

module.exports = parent(router,Store);