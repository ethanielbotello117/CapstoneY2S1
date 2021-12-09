const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
