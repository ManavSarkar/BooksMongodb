// add some dummy books to the database
// this is a script that can be run from the command line
// to populate the database with some dummy books

var BookSold = require("./books_selling_model");
var booksSold = [
  { isbn: "978-3-16-148410-0", title: "The Lord of the Rings", copiesSold: 1 },
  { isbn: "978-3-16-148410-1", title: "The Hobbit", copiesSold: 2 },
];
BookSold.insertMany(booksSold, function (err, docs) {
  if (err) {
    return console.error(err);
  } else {
    console.log("Multiple documents inserted to Collection");
  }
});
