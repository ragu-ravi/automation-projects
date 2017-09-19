class Products {
  constructor(css,index) {
    this.product = $(css+":nth-of-type("+index+")");
  }

  get add_button() {return this.product.element('.add-control');}
  get title() {return this.product.element('.product-tile--title');}
}

module.exports = Products;
