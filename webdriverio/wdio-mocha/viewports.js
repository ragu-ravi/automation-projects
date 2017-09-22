module.exports = {
  mobile: {
    home_page: require('./page-objects/pages/mobile/home-page'),
    search_page: require('./page-objects/pages/mobile/search-results-page')
  },
  desktop: {
    home_page: require('./page-objects/pages/desktop/home-page'),
    search_page: require('./page-objects/pages/desktop/search-results-page')
  }
}
