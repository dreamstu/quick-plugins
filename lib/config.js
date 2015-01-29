var path = require('path');

var register = function(quick){
    var _ = {};
    //配置文件的名称
    _.baseFolder = process.cwd();
    /***
     * 获取运行目录下的某个文件路径
     * @param target 某个文件路径
     * @returns {string}
     */
    _.getBasePath = function(target){
        return path.join(_.baseFolder,'..',target);
    };
    _.confFileName = 'qconf.js';
    _.logFileFolderName = 'logs';
    _.buildLogFileFolder = 'build_log';

    _.logFile = _.getBasePath(_.logFileFolderName);
    _.build = {};
    //构建日志文件所在目录
    _.build.logFile = _.getBasePath(_.buildLogFileFolder);
    //利用正则过滤掉不需要构建的组件
    _.build.filter = /^(node_modules|jquery|seajs|logs)$/i;
    //默认构建路径为当前目录下的build文件夹
    _.build.path = _.getBasePath('build');

    //Users can override this configuration Configuration
    _.confs = [_.getBasePath('node_modules'),_.getBasePath('Gruntfile.js')];
    return _;
};

module.exports = {
    register:register
};