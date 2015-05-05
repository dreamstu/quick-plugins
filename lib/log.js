/**
 * Created by dreamstu on 2015/1/16.
 */
 var Color = require('colorful').color;
var Log = function(){};
Log.prototype = {
	error:function(msg){
		this.diy(msg,'red');
	},
	success:function(msg){
		this.diy(msg,'green');
	},
	ok:function(msg){
		this.success(msg);
	},
	warn:function(msg){
		this.diy(msg,'yellow');
	},
	diy:function(msg,color,type){
		console[type || 'log'](Color[color || 'yellow'](msg));
	}
}
var log = new Log();
module.exports = log;