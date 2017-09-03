import HomePage from '../page-objects/pages/home-page';
import SearchResults from '../page-objects/pages/search-results-page';

describe('Feature: Search', () => {
  context('Anonyomus search for a product', () => {
    describe('Should return products for the search term', () => {
      let query = 'apples';

      before(() => {
        HomePage.open();
        HomePage.performSearch(query);
      });

      it('search heading should include search term', () => {
        expect(SearchResults.get_search_heading()).to.include(query);
      });

      it('product list should not be empty', () => {
        expect(SearchResults.get_product_lists()).to.not.have.lengthOf(0);
      });
    });
  });
});
