'use strict';

const Controller = require('egg').Controller;

class postController extends Controller {

  async getAllPosts() {

    var posts = await this.ctx.service.postsList.getAllPost();
    await this.ctx.render('client/postsList.html', {
      posts:posts,
      title: '会议列表',
    });

  }

  async getDistrict(){
    var districts = await this.ctx.service.postsList.getAllDistricts();
    // console.log(districts);
    this.ctx.body = {districts: districts};
    this.ctx.status = 200;
  }

  async getDepartment(){
    var departments = await this.ctx.service.postsList.getAllDepartments();
    // console.log(districts);
    this.ctx.body = {departments: departments};
    this.ctx.status = 200;
  }

  async getYear(){
    var years = await this.ctx.service.postsList.getAllYears();
    // console.log(districts);
    this.ctx.body = {years: years};
    this.ctx.status = 200;
  }

  async getMonth(){
    var months = await this.ctx.service.postsList.getAllMonths();
    // console.log(districts);
    this.ctx.body = {months: months};
    this.ctx.status = 200;
  }

  async getPostsByDistrict(){
    var req = await this.ctx.request.query;
    console.log(req);
    var posts = await this.ctx.service.postsList.getPostsByDistrict(req);
    console.log(posts);
    this.ctx.body = {posts: posts};
    this.ctx.status = 200;
  }

  async getPostsByDepartment(){
    var req = await this.ctx.request.query;
    console.log(req);
    var posts = await this.ctx.service.postsList.getPostsByDepartment(req);
    console.log(posts);
    this.ctx.body = {posts: posts};
    this.ctx.status = 200;
  }

  async getPostsByYear(){
    var req = await this.ctx.request.query;
    console.log(req);
    var posts = await this.ctx.service.postsList.getPostsByYear(req);
    console.log(posts);
    this.ctx.body = {posts: posts};
    this.ctx.status = 200;
  }

  async getPostsByMonth(){
    var req = await this.ctx.request.query;
    console.log(req);
    var posts = await this.ctx.service.postsList.getPostsByMonth(req);
    console.log(posts);
    this.ctx.body = {posts: posts};
    this.ctx.status = 200;
  }

  async getPostsByAll(){
    var req = await this.ctx.request.query;
    console.log(req);
    var posts = await this.ctx.service.postsList.getPostsByAll(req);
    console.log(posts);
    this.ctx.body = {posts: posts};
    this.ctx.status = 200;
  }

  async getPostDetail(){
    var postid = await this.ctx.request.query;
    console.log(postid);
    var post = await this.ctx.service.postsList.getPostDetail(postid);
    console.log(post);
    await this.ctx.render('client/post.html', {
      post:post,
      title: '会议详情',
    });
  }

  
}

module.exports = postController;