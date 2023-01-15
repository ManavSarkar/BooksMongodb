const router = require("express")();
const book = require("./book_model");
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// aggregate books in database and books sold in database
router.get("/books", async (req, res) => {
  // aggregate books in database and books sold in database
  // and return the result using lookup
  const data = await book.aggregate([
    {
      $lookup: {
        from: "booksolds",
        localField: "isbn",
        foreignField: "isbn",
        as: "booksold",
      },
    },
  ]);
  res.send(data);
});

module.exports = router;
