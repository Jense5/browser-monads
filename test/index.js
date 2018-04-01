const { expect } = require('chai');
const { isNothing } = require('nothing-mock');
const { window, document } = require('../src/index.js');

describe('General Tests', function() {
  it('window should be nothing outside browser', () => {
    expect(isNothing(window)).to.equal(true);
  });
  it('document should be nothing outside brower', () => {
    expect(isNothing(window)).to.equal(true);
  });
});
