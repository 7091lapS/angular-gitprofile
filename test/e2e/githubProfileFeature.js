describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));

  it('finds profiles', function() {
    browser.get('http://localhost:8080');

    searchBox.sendKeys('spike0');
    element(by.className('btn')).click();

    expect(element(by.binding('user.login')).getText()).
        toEqual('spike01');
  });
});
