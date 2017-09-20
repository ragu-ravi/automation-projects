class Section {
  constructor(name,css) {
    this.section = name
    this.css = css
  }

  items() {
    for(var results=[],i=1,size=$$(this.css).length;i <= size; i++) {
      results.push(new this.section(this.css,i));
    }
    return results;
  }

  item() {
    return new this.section(this.css,1)
  }

}

module.exports = Section;
