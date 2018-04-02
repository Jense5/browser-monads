const { expect } = require('chai');
const { isNothing } = require('nothing-mock');
const { window, document, exists } = require('../lib/index.js');

describe('General Tests', function() {
  it('window should be nothing outside browser', () => {
    expect(exists(window)).to.equal(false);
    expect(isNothing(window)).to.equal(true);
  });
  it('document should be nothing outside brower', () => {
    expect(exists(document)).to.equal(false);
    expect(isNothing(document)).to.equal(true);
  });
});
