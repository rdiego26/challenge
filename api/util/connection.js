/**
 * Created by ramos on 23/09/15.
 */
var constants = require('./constants'),
    mongoose = require('mongoose').connect(constants.db.connectionStr);

module.exports = mongoose;