const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
