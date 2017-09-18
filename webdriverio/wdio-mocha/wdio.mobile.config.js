// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');
// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
    capabilities: [{
        // more caps defined here
        maxInstances: 5,
        //
        browserName: 'chrome'
        }]
    // run tests on sauce instead locally

});
// add an additional reporter
