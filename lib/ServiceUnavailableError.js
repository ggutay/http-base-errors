'use strict';

var util = require('util');
var Super = require('./HttpError');

var $ = function ServiceUnavailableError(message, cause) {
  Super.call(this, message, 503, cause);
};
util.inherits($, Super);

module.exports = $;
