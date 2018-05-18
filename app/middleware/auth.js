'use strict';

module.exports = () => {
    return async function gzip(ctx, next) {
      var isAuth = ctx.isAuthenticated();
      if(!isAuth){
            return;
      }
      await next();
    };
  };