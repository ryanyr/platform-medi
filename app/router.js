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
  router.get('/getAllDepartments', controller.client.post.getDepartment);
  router.get('/getAllYears', controller.client.post.getYear);
  router.get('/getAllMonths', controller.client.post.getMonth);




  //admin

};
