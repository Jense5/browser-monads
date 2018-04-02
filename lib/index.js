'use strict';

var _require = require('nothing-mock'),
    Nothing = _require.Nothing,
    isNothing = _require.isNothing;

var win = typeof window !== 'undefined' ? window : Nothing;
var doc = typeof document !== 'undefined' ? document : Nothing;

module.exports.window = win;
module.exports.document = doc;
module.exports.exists = function (variable) {
  return !isNothing(variable);
};