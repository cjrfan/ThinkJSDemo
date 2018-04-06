const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        this.assign('page_title','ejs模板引擎使用');
        return this.display('index.html');
    }
};
