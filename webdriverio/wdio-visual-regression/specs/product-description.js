import PDP from '../page-objects/pages/product-description-page';

const compareImage = outputs => {
  outputs.forEach((output, index) => expect(output.isExactSameImage, `Images are not same`).to.be.true);
}

describe('Feature: Product Description Page', () => {
  context('Product Container Check', () => {
    let productId = '254656543'
    before(() => {
      PDP.open(productId);
    });

    it('search heading should include search term', () => {
      compareImage(browser.checkElement(PDP.rest_of_shelf.selector));
    });
  });
});
