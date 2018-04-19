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
  router.get('/admin/userlist', controller.admin.adminPost.userlist);
  router.get('/admin/postlist', controller.admin.adminPost.postlist);
  router.get('/admin/post', controller.admin.adminPost.postdetail);
  router.get('/admin/editpost', controller.admin.adminPost.postEdit);
  router.get('/admin/addpost', controller.admin.adminPost.postAdd);
  router.post('/admin/savepost', controller.admin.adminPost.postSave);
  router.post('/admin/deletepost', controller.admin.adminPost.postDelete);
  router.get('/admin/medialist', controller.admin.adminPost.medialist);
  router.get('/admin/doctorlist', controller.admin.adminPost.doctorlist);
  router.get('/admin/modifycode', controller.admin.adminPost.modifycode);
  router.get('/admin/system', controller.admin.adminPost.system);

};
