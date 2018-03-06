'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {

    await this.ctx.render('client/home.html', {
      user: {
        name: 'foobar',
      },
      title: 'egg view example',
    });

  }
  
}

module.exports = HomeController;
