// Examples of tests to show how debugging works with Protractor. Tests
// should be run against the testapp.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*_spec.js'],
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },

  // ----- Options to be passed to minijasminenode.
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
};