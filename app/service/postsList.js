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

    async getAllDepartments(){
        const departments = dataSource.department;
        console.log(departments);
        return departments;
    }

    async getAllYears(){
        const years = dataSource.year;
        console.log(years);
        return years;
    }

    async getAllMonths(){
        const months = dataSource.month;
        console.log(months);
        return months;
    }

}

module.exports = PostsListService;