'use strict';

const Controller = require('egg').Controller;

class postController extends Controller {

  async getAllPosts() {

    var posts = await this.ctx.service.postsList.getAllPost();
    // console.log(posts);
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
    var districts = await this.ctx.service.postsList.getAllDepartments();
    // console.log(districts);
    this.ctx.body = {districts: districts};
    this.ctx.status = 200;
  }

  async getYear(){
    var districts = await this.ctx.service.postsList.getAllYears();
    // console.log(districts);
    this.ctx.body = {districts: districts};
    this.ctx.status = 200;
  }

  async getMonth(){
    var districts = await this.ctx.service.postsList.getAllMonths();
    // console.log(districts);
    this.ctx.body = {districts: districts};
    this.ctx.status = 200;
  }
  
}

module.exports = postController;