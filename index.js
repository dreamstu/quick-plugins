/**
 * Created by johnkim on 15-1-19.
 */
var quick = module.exports = {};
quick.log = require('./lib/log');
quick.config = require('./lib/config').register(quick);
quick.util = require('./lib/util').register(quick);
quick.verbose = quick.log.verbose;
quick.package = require('./package.json');
quick.version = quick.package.version;