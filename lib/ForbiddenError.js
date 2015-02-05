module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = require('./AuthorizationError');

  var $ = function ForbiddenError(message, cause) {
    Super.call(this, message, 403, cause);
  };
  util.inherits($, Super);

  return $;
})();
