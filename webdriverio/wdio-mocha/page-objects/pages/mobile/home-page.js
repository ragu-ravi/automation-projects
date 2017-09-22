import Page from '../../page';

class HomePage extends Page {
  get search_box() { return $('#query-small') }

  open() {
    console.log("VIEWPORT : MOBILE");
    super.open('/groceries');
  }

  performSearch(query) {
    this.search_box.waitForExist();
    this.search_box.setValue(query);
    browser.keys('Enter');
  }
}
module.exports = new HomePage();
