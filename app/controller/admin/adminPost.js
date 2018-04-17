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

      async userlist() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/userlist.html', {
        //   posts:posts,
          title: '用户列表',
        });
    
      }

      async postlist() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/postlist.html', {
        //   posts:posts,
          title: '会议管理',
        });
    
      }

      async medialist() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/medialist.html', {
        //   posts:posts,
          title: '视频管理',
        });
    
      }

      async doctorlist() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/doctorlist.html', {
        //   posts:posts,
          title: '专家学者列表',
        });
    
      }

      async modifycode() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/system.html', {
        //   posts:posts,
          title: '修改密码',
        });
    
      }

      async system() {
        // var posts = await this.ctx.service.postsList.getAllPost();
        await this.ctx.render('admin/system.html', {
        //   posts:posts,
          title: '修改密码',
        });
    
      }
}

module.exports = adminController;