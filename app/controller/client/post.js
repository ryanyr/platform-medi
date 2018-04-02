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

  async getPosts(){
    var req = this.ctx.request;
    // var req = this.ctx.request;
    console.log(req);
    // var months = await this.ctx.service.postsList.getPosts();
    // // console.log(districts);
    // this.ctx.body = {posts: posts};
    // this.ctx.status = 200;
  }

  
}

module.exports = postController;