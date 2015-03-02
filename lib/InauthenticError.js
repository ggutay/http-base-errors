'use strict';

var util = require('util');
var Super = require('./UnauthorizedError');

// Specialized UnauthorizedError indicating the credentials
// were inauthentic (could not be authenticated).
var $ = function InauthenticError(message, cause) {
  Super.call(this, message, 401, cause);
};
util.inherits($, Super);

module.exports = $;
