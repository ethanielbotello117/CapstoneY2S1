const express = require("express");
const router = express.Router();

const {
  createCartProduct,
  getAllCartProducts,
  clearCart,
  removeCartItem,
} = require("../controllers/cartController");

router.route("/").get(getAllCartProducts);
router.route("/").post(createCartProduct);
router.route("/").delete(clearCart);
router.route("/:id").delete(removeCartItem);

module.exports = router;
