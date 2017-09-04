import Page from '../page';

class PDP extends Page {

  get rest_of_shelf() { return $('.product-title--container') }

  open(productId) {
    super.open(`/groceries/en-GB/products/${productId}`);
  }
}
module.exports = new PDP();
