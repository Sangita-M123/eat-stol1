const mongoose = require("mongoose");
const { Schema } = mongoose;
const fooddataSchema = new Schema({
  name: String,
  varients: [],
  prices: [],
  category: String,
  image: String,
  description: String,
});
module.exports = mongoose.model("fooddata", fooddataSchema);
