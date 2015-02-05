module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = require('./HttpError');

  var $ = function UnprocessableEntityError(message, cause) {
    Super.call(this, message, 422, cause);
  };
  util.inherits($, Super);

  return $;
})();
