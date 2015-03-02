'use strict';

var util = require('util');
var Super = require('./HttpError');

var $ = function AuthorizationError(message, statusCode, cause) {
  Super.call(this, message, statusCode || 401, cause);
};
util.inherits($, Super);

module.exports = $;
