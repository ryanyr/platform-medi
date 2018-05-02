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
        var posts = await this.ctx.service.admin.getFPPost();
        // console.log(posts);
        await this.ctx.render('admin/postlist.html', {
          posts:posts,
          title: '会议管理',
        });
    
      }

      async postdetail() {
        var id = this.ctx.request.query;
        console.log(id);
        var posts = await this.ctx.service.admin.getPostDetail(id);
        console.log(posts);
        await this.ctx.render('admin/post.html', {
          post:posts,
          title: '会议详情',
        });
    
      }

      async postEdit() {
        var id = this.ctx.request.query;
        console.log(id);
        var posts = await this.ctx.service.admin.getPostDetail(id);
        console.log(posts);
        await this.ctx.render('admin/postedit.html', {
          post:posts,
          title: '会议编辑',
        });
    
      }

      async postUpdate() {
        var data = this.ctx.request.body;
        var result = await this.ctx.service.admin.postUpdate(data);
        // console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'保存成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'保存失败，请稍后再试'};
        }
    
      }

      async postDelete() {
        var id = this.ctx.request.body.id;
        console.log(id);
        var result = await this.ctx.service.admin.postDelete(id);
        console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'删除成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'删除失败，请稍后再试'};
        }
    
      }

      async postAdd() {

        await this.ctx.render('admin/postadd.html', {
          title: '添加会议',
        });
    
      }

      async postSave() {
        var data = this.ctx.request.body;
        // console.log(data);
        var result = await this.ctx.service.admin.postSave(data);
        console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'保存成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'保存失败，请稍后再试'};
        }
      }

      async medialist() {
        var media = await this.ctx.service.admin.getAllMedia();
        await this.ctx.render('admin/medialist.html', {
          media:media,
          title: '视频管理',
        });
    
      }

      async mediadetail() {
        var id = this.ctx.request.query;
        console.log(id);
        var posts = await this.ctx.service.admin.getMediaDetail(id);
        console.log(posts);
        await this.ctx.render('admin/media.html', {
          post:posts,
          title: '会议详情',
        });
    
      }

      async mediaEdit() {
        var id = this.ctx.request.query;
        console.log(id);
        var posts = await this.ctx.service.admin.getMediaDetail(id);
        console.log(posts);
        await this.ctx.render('admin/mediaedit.html', {
          post:posts,
          title: '会议编辑',
        });
    
      }

      async mediaAdd() {

        await this.ctx.render('admin/mediaadd.html', {
          title: '添加视频',
        });
    
      }

      async mediaSave() {
        var data = this.ctx.request.body;
        // console.log(data);
        var result = await this.ctx.service.admin.mediaSave(data);
        console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'保存成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'保存失败，请稍后再试'};
        }
      }

      async mediaUpdate() {
        var data = this.ctx.request.body;
        var result = await this.ctx.service.admin.mediaUpdate(data);
        // console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'保存成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'保存失败，请稍后再试'};
        }
    
      }

      async mediaDelete() {
        var id = this.ctx.request.body.id;
        console.log(id);
        var result = await this.ctx.service.admin.mediaDelete(id);
        console.log(result);
        if(result){
          this.ctx.status=200;
          this.ctx.body={message:'删除成功'};
        }else{
          this.ctx.status=403;
          this.ctx.body={message:'删除失败，请稍后再试'};
        }
    
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