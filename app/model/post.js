module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT, TEXT} = app.Sequelize;
    const Post = app.model.define("post", {
      id: {
        type: BIGINT(11),
        autoIncrement:true,
        primaryKey : true,
        unique : true
      },
      title:STRING,
      department:STRING,
      intro:TEXT,
      content:TEXT,
      province:STRING,
      city:STRING, 
      author:BIGINT(11),
      participant_id: TEXT,                
      meeting_time:DATE,
      publish_at: DATE,
      created_at: DATE,
      updated_at: DATE
    });
    return Post;
  };