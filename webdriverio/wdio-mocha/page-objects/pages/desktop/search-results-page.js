import Page from '../../page';
import Products from './sections/products_section'

class SearchResults extends Page {
  get search_heading() { return $('h1.heading'); }
  get product_list() { return $$('.product-list--list-item'); }
  get products() { return new Products('.product-list--list-item').items }


  get_search_heading() {
    this.search_heading.waitForExist();
    return this.search_heading.getText();
  }

  get_product_lists() {
    return this.product_list;
  }
}
module.exports = new SearchResults();
