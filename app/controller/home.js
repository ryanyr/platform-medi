'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {

    await this.ctx.render('client/home.html', {
      user: {
        name: 'foobar',
      },
      title: '医疗会议查询平台',
    });

  }
  
}

module.exports = HomeController;
