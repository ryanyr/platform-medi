const Service = require('egg').Service;
const dataSource = require('./navData');

class PostsListService extends Service{

    async getAllPost(){
        const posts = await this.app.model.Post.findAll();
        return posts;
    }

    async getAllDistricts(){
        const districts = dataSource.district;
        console.log(districts);
        return districts;

    }

}

module.exports = PostsListService;