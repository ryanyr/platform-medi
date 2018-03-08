const Service = require('egg').Service;

class PostsListService extends Service{
    async getAllPost(){
        const posts = await this.app.mysql.get('post');
        return posts;
    }
}

module.exports = PostsListService;