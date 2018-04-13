'use strict';

const Controller = require('egg').Controller;

class adminController extends Controller {

    async login() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/login.html', {
        //   posts:posts,
          title: '后台管理平台-登录',
        });
    
      }

    async doLogin() {
        var req = this.ctx.request.body;
        console.log(req);
        this.ctx.body = {posts:1}
        this.ctx.status = 200;
        // var posts = await this.ctx.service.postsList.getAllPost();
    
      }

    async home() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/home.html', {
        //   posts:posts,
          title: '后台管理平台',
        });
    
      }
}

module.exports = adminController;