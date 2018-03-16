module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT, TEXT } = app.Sequelize;
    const Post = app.model.define("post", {
      id: {
        type: BIGINT(11),
        autoIncrement:true,
        primaryKey : true,
        unique : true
      },
      userid:BIGINT(11),
      content:TEXT,
      publish_at: DATE,
      created_at: DATE,
      updated_at: DATE
    });
    return Post;
  };