const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

module.exports = { 
    Comment,
    Post,
    User,
};
