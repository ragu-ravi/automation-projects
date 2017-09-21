class Product {
  constructor(css,index) {
    this.item = $(css+":nth-of-type("+index+")");
  }
  get add_button() {return this.item.element('.add-control');}
  get title() {return this.item.element('.product-tile--title');}

}

module.exports = Product;
