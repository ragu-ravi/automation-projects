import Page from '../page';

class PLP extends Page {
  get plp_container() { return $('#product-list') }

  open(query) {
    super.open(`/groceries/en-GB/search?query=${query}`);
  }
}
module.exports = new PLP();
