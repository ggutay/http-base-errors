'use strict';

var util = require('util');
var Super = require('./HttpError');

var $ = function ConflictError(message, cause) {
  Super.call(this, message, 409, cause);
};
util.inherits($, Super);

module.exports = $;
