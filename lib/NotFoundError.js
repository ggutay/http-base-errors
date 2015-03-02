'use strict';

var util = require('util');
var Super = require('./HttpError');

var $ = function NotFoundError(message, cause) {
  Super.call(this, message || 'Resource not found.', 404, cause);
};
util.inherits($, Super);

module.exports = $;
