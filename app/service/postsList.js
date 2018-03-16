const Service = require('egg').Service;

class PostsListService extends Service{

    async getAllPost(){
        const posts = await this.app.model.Post.findAll();
        return posts;
    }
}

module.exports = PostsListService;