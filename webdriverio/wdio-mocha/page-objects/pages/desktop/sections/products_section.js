class Product {
  constructor(css,index) {
    this.item = $(css+":nth-of-type("+index+")");
  }

  get add_button() {return this.item.element('.add-control');}
  get title() {return this.item.element('.product-tile--title');}
}

class Products {
  constructor(css) {
    for(var results=[],i=1,size=$$(css).length;i <= size; i++) {
      results.push(new Product(css,i));
    }
    this.items = results;
  }
}

module.exports = Products;
