import HomePage from '../page-objects/pages/home-page';
import SearchResults from '../page-objects/pages/search-results-page';

module.exports = function () {
  this.When(/^I search for "(.+)"$/, (query) => {
    HomePage.performSearch(query);
  });

  this.Then(/^I should see results for "(.+)"$/, (query) => {
    expect(SearchResults.get_search_heading()).to.include(query);
    expect(SearchResults.get_product_lists()).to.not.have.lengthOf(0);
  });
};
