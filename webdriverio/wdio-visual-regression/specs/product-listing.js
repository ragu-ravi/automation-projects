import PLP from '../page-objects/pages/product-listing-page'

const compareImages = outputs => {
  outputs.forEach((output, index) => expect(output.isWithinMisMatchTolerance, `Images are not same`).to.be.true);
}

describe('Feature: Product Listing Page', () => {
  context('Product container check', () => {
    const query = 'cola'
    before(() => {
      PLP.open(query);
    });

    it('product container elements should be correct for the query', () => {
      compareImages(browser.checkElement(PLP.plp_container.selector));
    });
  });
});
