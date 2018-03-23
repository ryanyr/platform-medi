module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT, TEXT} = app.Sequelize;
    const Post = app.model.define("post", {
      id: {
        type: BIGINT(11),
        autoIncrement:true,
        primaryKey : true,
        unique : true
      },
      userid:BIGINT(11),
      title:STRING,
      content:TEXT,
      province:STRING,
      city:STRING,                      
      meeting_time:DATE,
      publish_at: DATE,
      created_at: DATE,
      updated_at: DATE
    });
    return Post;
  };