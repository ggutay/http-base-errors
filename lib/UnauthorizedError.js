'use strict';

var util = require('util');
var Super = require('./AuthorizationError');

var $ = function UnauthorizedError(message, cause) {
  Super.call(this, message, 401, cause);
};
util.inherits($, Super);

module.exports = $;
