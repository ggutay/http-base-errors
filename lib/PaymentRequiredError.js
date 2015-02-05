module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = require('./HttpError');

  var $ = function PaymentRequiredError(message, cause) {
    Super.call(this, message, 402, cause);
  };
  util.inherits($, Super);

  return $;
})();
