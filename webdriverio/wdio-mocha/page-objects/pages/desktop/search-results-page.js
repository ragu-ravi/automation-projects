import Page from '../../page';
import Products from './sections/products_section'

class SearchResults extends Page {
  get search_heading() { return $('h1.heading'); }
  get product_list() { return $$('.product-list--list-item'); }
  get products() {
     for (var results = [],size = this.product_list.length, i =1; i <= size; i++) {
       results.push(new Products('.product-list--list-item',i));
     }
     return results;
  }

  get_search_heading() {
    this.search_heading.waitForExist();
    return this.search_heading.getText();
  }

  get_product_lists() {
    return this.product_list;
  }
}
module.exports = new SearchResults();
