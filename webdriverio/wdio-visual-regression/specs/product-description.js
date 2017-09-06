import PDP from '../page-objects/pages/product-description-page';

const compareImages = outputs => {
  outputs.forEach((output, index) => expect(output.isWithinMisMatchTolerance, `Images are not same`).to.be.true);
}

describe('Feature: Product Description Page', () => {
  context('Product container check', () => {
    const unavailableProductId = '253558033'
    before(() => {
      PDP.open(unavailableProductId);
    });

    it('product container elements should be correct for an unavailable product', () => {
      compareImages(browser.checkElement(PDP.pdp_container.selector));
    });
  });
});
