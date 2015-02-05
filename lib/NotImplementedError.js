module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = require('./BadRequestError');

  var $ = function NotImplementedError(message, cause) {
    Super.call(this, message, cause);
  };
  util.inherits($, Super);

  return $;
})();
