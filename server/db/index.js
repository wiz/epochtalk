var config = require(__dirname + '/../config');
var db = {};
db.boards = require(__dirname + '/boards');
db.threads = require(__dirname + '/threads');
db.posts = require(__dirname + '/posts');
db.users = require(__dirname + '/users');
console.log(db.users);

module.exports = db;
