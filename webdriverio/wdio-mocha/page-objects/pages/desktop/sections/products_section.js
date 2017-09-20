class Product {
  constructor(css,index) {
    this.item = $(css+":nth-of-type("+index+")");
  }

  get add_button() {return this.item.element('.add-control');}
  get title() {return this.item.element('.product-tile--title');}
}

function product_items(css) {
    for(var results=[],i=1,size=$$(css).length;i <= size; i++) {
      results.push(new Product(css,i));
    }
    return results
  }

module.exports = product_items;
