const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.assign('title', 'learn thinkjs'); //给模板赋值
    this.body = 'hello word!';
    // return this.display();//渲染模板
  }

  homeAction(){
      return this.display();//渲染模板
  }
};

/*module.exports = class extends think.Controller {
    indexAction(){
        this.assign('title', 'learn thinkjs'); //给模板赋值
        const title1 = this.assign('title');

        const ip = this.ctx.ip;
        const header = this.ctx.header;
        const method = this.ctx.method;
        const req = this.ctx.req;
        const res = this.ctx.res;
        const url = this.ctx.url;
        const href = this.ctx.href;
        console.log(href);
        console.log(url);
        return this.display(); //渲染模板
    }
};*/
