const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {

    if (app.config.env === 'local') {
        app.beforeStart(async function () {
                await app
                    .model
                    .sync({force: false}); // false 为不覆盖 true会删除再创建
            });
    }

    app.passport.use(new LocalStrategy({
            passReqToCallback: true,
            usernameField:'username'
        }, (req, username, password, done) => {
            var User = {
                username: username,
                password: password
            }
            app.passport.doVerify(req, user, done); 
            
        }));

    // 处理用户信息
    app.passport.verify(async (ctx, user) => {
        var user = await this.app.model.User.findOne({
            where:{
                username: username,
            }
        })
        if(!user){
            return done(null, false, { message: '用户名或邮箱 ' + username + ' 不存在'});
        }else{
            // bcrypt.compare(password, user.password, callback); 
            return done(null, user);
        }
    });
    app.passport.serializeUser(async (ctx, user) => {
        done(null,user.id);
    });
    app.passport.deserializeUser(async (ctx, user) => {
        var user = await this.app.model.User.findOne({
            where:{
                id:id
            }
        })
        done(null, user);
    }); 

}