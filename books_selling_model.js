// model for book having isbn, title and copies sold (in millions)
var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  copiesSold: Number,
});

module.exports = mongoose.model("BookSold", bookSchema);
