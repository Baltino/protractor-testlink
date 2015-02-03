
describe('modes of failure', function() {
  it('should fail to find a non-existent element', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    // Run this statement before the line which fails. If protractor is run
    // with the debugger (protractor debug debugging/conf.js), the test
    // will pause after loading the webpage but before trying to find the
    // element.
    browser.pause();

    // This element doesn't exist, so this fails.
    var nonExistant = element(by.binding('nopenopenope')).getText();
  });

  it('should fail to click a hidden element', function () {
    browser.get('index.html#/form');
    element(by.id("hiddenbutton")).click();
  });

  it('should fail to use protractor on a non-Angular site', function() {
    browser.get('http://www.google.com');
  }, 20000);


  it('should fail because it throws an error', function() {
    function foo() {
      throw new Error('bar!');
    }
    foo();
  });
});