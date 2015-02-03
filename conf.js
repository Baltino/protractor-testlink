// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  }
}