const Service = require('egg').Service;
const dataSource = require('./navData');
const format = require('./format');

class PostsListService extends Service{

    async getAllPost(){
        const posts = await this.app.model.Post.findAll();
        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
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