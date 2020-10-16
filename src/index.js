const { Nothing, isNothing } = require('nothing-mock');

const win = (typeof window !== 'undefined') ? window : Nothing;
const doc = (typeof document !== 'undefined') ? document : Nothing;
const nav = (typeof navigator !== 'undefined') ? navigator : Nothing;

module.exports.window = win;
module.exports.document = doc;
module.exports.navigator = nav;
module.exports.exists = variable => !isNothing(variable)
