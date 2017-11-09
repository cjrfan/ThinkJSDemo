module.exports = class extends think.Controller {
    indexAction() {
        this.assign('title','主页');//给模板赋值
        this.assign({
            logo:'logo',
            name:'cjrfan'
        });
        const title = this.assign('title');
        console.log(title);
        return this.display();//渲染模板
    }
};
