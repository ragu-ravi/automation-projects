import Page from '../../page';
import Product from '../../sections/products_section'
import {section, sections} from '../../helpers/sections'

class SearchResults extends Page {
  get search_heading() { return $('h1.heading'); }
  get product() { return section(Product, '.product-list--list-item') }
  get products() { return sections(Product, '.product-list--list-item') }

  get_search_heading() {
    this.search_heading.waitForExist();
    return this.search_heading.getText();
  }
}
module.exports = new SearchResults();
