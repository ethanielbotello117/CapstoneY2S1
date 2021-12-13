const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Cart", CartSchema);
