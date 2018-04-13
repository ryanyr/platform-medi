'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  router.get('/', controller.home.index);

  //client
  router.get('/hot', controller.client.post.getAllPosts);
  router.get('/monthy', controller.client.post.getMonthyPosts);
  router.get('/all', controller.client.post.getAllPosts);
  router.get('/media', controller.client.post.getMedia);
  router.get('/doctors', controller.client.post.getDoctors);

  router.get('/getAllDistricts', controller.client.post.getDistrict);
  router.get('/getAllDepartments', controller.client.post.getDepartment);
  router.get('/getAllYears', controller.client.post.getYear);
  router.get('/getAllMonths', controller.client.post.getMonth);
  router.get('/getPostsByDistrict', controller.client.post.getPostsByDistrict);
  router.get('/getPostsByDepartment', controller.client.post.getPostsByDepartment);
  router.get('/getPostsByYear', controller.client.post.getPostsByYear);
  router.get('/getPostsByMonth', controller.client.post.getPostsByMonth);
  router.get('/getPostsByAll', controller.client.post.getPostsByAll);
  router.get('/post', controller.client.post.getPostDetail);


  //admin
  // router.get('/admin/', controller.admin.adminPost.login);
  router.get('/admin/login', controller.admin.adminPost.login);
  router.post('/admin/doLogin', controller.admin.adminPost.doLogin);
  router.get('/admin/index', controller.admin.adminPost.home);

};
