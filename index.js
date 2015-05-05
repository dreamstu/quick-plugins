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
quick.require = function(){
    var path;
    var name = Array.prototype.slice.call(arguments, 0).join('-');
    if(quick.require._cache.hasOwnProperty(name)) return quick.require._cache[name];
    var names = [];
    for(var i = 0, len = quick.require.prefixes.length; i < len; i++){
        try {
            var pluginName = quick.require.prefixes[i] + '-' + name;
            names.push(pluginName);
            path = require.resolve(pluginName);
            try {
                return quick.require._cache[name] = require(pluginName);
            } catch (e){
                quick.log.error('load plugin [' + pluginName + '] error : ' + e.message);
            }
        } catch (e){}
    }
    quick.log.error('unable to load plugin [' + names.join('] or [') + ']');
};
quick.require.prefixes = ['quick'];
quick.require._cache = {};