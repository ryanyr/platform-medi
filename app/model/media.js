module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT, TEXT} = app.Sequelize;
    const Media = app.model.define("media", {
      id: {
        type: BIGINT(11),
        autoIncrement:true,
        primaryKey : true,
        unique : true
      },
      userid:BIGINT(11),
      author:STRING,
      title:STRING,
      department:STRING,
      intro:TEXT,
      mediaurl:STRING,
      content:TEXT,
      province:STRING,
      city:STRING,                      
      post_time:DATE,
      publish_at: DATE,
      created_at: DATE,
      updated_at: DATE
    });
    return Media;
  };