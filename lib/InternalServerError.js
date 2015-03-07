'use strict';

var util = require('util');
var Super = require('./HttpError');

var $ = function InternalServerError(message, cause) {
  Super.call(this, message, 500, cause);
};
util.inherits($, Super);

module.exports = $;
