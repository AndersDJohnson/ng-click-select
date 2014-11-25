/**
 * 
 * https://code.google.com/p/selenium/wiki/WebDriverJs#Understanding_the_API
 */
var ptor = require('protractor');

describe('angular', function () {

  it('should select all', function () {

    browser.get('/test/index.html');
    var text1 = element(by.id('text-1'));
    var text2 = element(by.id('textarea-1'));
    var ghost = element(by.id('ghost'));
    text1.getAttribute('value').then(function (text1Value) {
      text1.click();
      text1.sendKeys(ptor.Key.CONTROL + 'c');
      text1.sendKeys(ptor.Key.TAB);
      ghost.sendKeys(ptor.Key.CONTROL + 'v');

      ghost.getAttribute('value').then(function (ghostValue) {
        expect(true).toEqual(true);
        expect(ghostValue).toEqual(text1Value);
      });
    });

  });

});
