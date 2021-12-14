const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("Cart", CartSchema);
