import PDP from '../page-objects/pages/product-description-page';

const compareImages = outputs => {
  outputs.forEach((output, index) => expect(output.isExactSameImage, `Images are not same`).to.be.true);
}

describe('Feature: Product Description Page', () => {
  context('Product container check', () => {
    const productId = '254656543'
    before(() => {
      PDP.open(productId);
    });

    it('product container elements should be aligned properly', () => {
      compareImages(browser.checkElement(PDP.rest_of_shelf.selector));
    });
  });
});
