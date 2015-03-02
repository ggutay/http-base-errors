'use strict';

var util = require('util');
var Super = require('./BadRequestError');

var $ = function InvalidOperationError(message, cause) {
  Super.call(this, message, cause);
};
util.inherits($, Super);

module.exports = $;
