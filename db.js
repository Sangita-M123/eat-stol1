const mongoose = require("mongoose");
var mongoURL =
  "mongodb+srv://Gofood:gofood6@cluster0.n3licnz.mongodb.net/merneat?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoURL)

  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
