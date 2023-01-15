// model for book having isbn, title and author
var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
});

module.exports = mongoose.model("Book", bookSchema);
