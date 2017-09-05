import Page from '../page';

class PDP extends Page {

  get pdp_container() { return $('.product-details-page') }

  open(productId) {
    super.open(`/groceries/en-GB/products/${productId}`);
  }
}
module.exports = new PDP();
