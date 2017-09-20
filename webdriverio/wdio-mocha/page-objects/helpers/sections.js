function sections(name,css) {
    for(var results=[],i=1,size=$$(css).length;i <= size; i++) {
      results.push(new name(css,i));
    }
    return results;
}

function section(name,css) {
    return new name(css,1);
}

module.exports = { sections,section};
