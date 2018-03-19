'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  router.get('/', controller.home.index);

  //client
  router.get('/monthy', controller.client.post.getAllPosts);
  router.get('/getAllDistricts', controller.client.post.getDistrict);




  //admin

};
