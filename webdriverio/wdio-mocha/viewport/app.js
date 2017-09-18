
let mobile_app = require('./mobile-app')
let desktop_app = require('./desktop-app')

module.exports = function() {

    if (process.env.VIEWPORT === 'mobile'){
      browser.windowHandleSize({width: 500,height: 500});
      return mobile_app;
    }
    else if (process.env.VIEWPORT === 'desktop') {
      return desktop_app;
    }
    else {
      return mobile_app;
    }

};
