// connection to mongodb localhost
var mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/expressdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((err) => {
    console.log("Connection to MongoDB failed");
  });
