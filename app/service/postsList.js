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
        // console.log(districts);
        return districts;
    }

    async getAllDepartments(){
        const departments = dataSource.department;
        // console.log(departments);
        return departments;
    }

    async getAllYears(){
        const years = dataSource.year;
        // console.log(years);
        return years;
    }

    async getAllMonths(){
        const months = dataSource.month;
        // console.log(months);
        return months;
    }

    async getPostsByDistrict(req){
        var params = req;
        const posts = await this.app.model.Post.findAll({
            where: { province: params.district } 
        });
        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
        return posts;
    }

    async getPostsByDepartment(req){
        var params = req;
        const posts = await this.app.model.Post.findAll({
            where: { province: params.district } 
        });
        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
        return posts;
    }

    async getPostsByYear(req){
        var params = req;
        var year = params.year;
        console.log(year);
        var start = new Date(year,0,1,0,0,0);
        var fin = new Date(year,11,31,23,59,59);
        console.log(start);
        console.log(fin);
        const posts = await this.app.model.Post.findAll({
            where: { meeting_time: {
                //中文文档内使用[Op.between],chm in En 使用$between
                $between:[start,fin]
            } }
            //limit:10
        });        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
        return posts;
    }

    async getPostsByMonth(req){
        var params = req;
        var month = params.month;
        const posts = await this.app.model.Post.findAll({
            where: { province: params.district } 
        });
        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
        return posts;
    }

    async getPostsByAll(req){
        var params = req;
        var queryObj = {};
        var district = params.district;
        var department = params.department;
        var year = params.year;
        var month = params.month;
        var start;
        var fin;
        if(!!district){
            queryObj.province = district;
        }
        if(!!department){
            queryObj.department = department;
        }
        if(!!year){
            start = new Date(year,0,1,0,0,0);
            fin = new Date(year,11,31,23,59,59);
            queryObj.meeting_time = {
                $between:[start,fin]
            };
        }
        /* if(!!month){
            queryObj.month = month;
        } */
        console.log(queryObj);
        const posts = await this.app.model.Post.findAll({
            where: queryObj
            //limit:10
        });        
        for(var i=0; i<posts.length; i++){             
            var formatTime = format.formatDate(posts[i].meeting_time);
            posts[i].meetingTime = formatTime;
        }
        return posts;
    }

}

module.exports = PostsListService;