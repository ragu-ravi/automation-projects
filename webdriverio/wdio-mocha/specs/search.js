let app = require('../page-objects/helpers/viewports')[process.env.VIEWPORT]

describe('Feature: Search', () => {
  context('Anonyomus search for a product', () => {
    const query = 'Apple';

    before(() => {
      app.home_page.open();
      app.home_page.performSearch(query);
    });

    it('search heading should include search term', () => {
      expect(app.search_page.get_search_heading()).to.include(query);
    });

    it('product list should not be empty', () => {
      expect(app.search_page.products).to.not.have.lengthOf(0);
      console.log('Title of 1st product :', app.search_page.product.title.getText());
      console.log('Title of 2nd product :', app.search_page.products[1].title.getText());
      expect(app.search_page.products[0].title.getText()).to.include(query);
    });
  });
});
