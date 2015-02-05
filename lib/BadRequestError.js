module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = require('./HttpError');

  var $ = function BadRequestError(message, cause) {
    Super.call(this, message, 400, cause);
  };
  util.inherits($, Super);

  return $;
})();
