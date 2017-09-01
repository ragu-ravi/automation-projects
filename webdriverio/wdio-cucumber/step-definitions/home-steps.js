import HomePage from '../page-objects/pages/home-page';

module.exports = function () {
  this.Given(/^I am on home page$/, () => {
    HomePage.open();
  });
}
