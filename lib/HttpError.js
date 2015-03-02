'use strict';

var util = require('util');
var Super = require('error-base').Error;

// Specialized Error class for HTTP equivalent errors.
var $ = function Error(message, statusCode, cause) {
  Super.call(this, message);
  this.statusCode = statusCode || 500;
  this.code = this.constructor.name;
  this.cause = cause;
};
util.inherits($, Super);

module.exports = $;
