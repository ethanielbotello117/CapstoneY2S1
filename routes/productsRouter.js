const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProduct,
  DeleteProduct,
  clearProducts,
} = require("../controllers/productController");

const { uploadProductImage } = require("../controllers/uploadController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/").delete(clearProducts);
router.route("/:id").delete(DeleteProduct);
router.route("/:id").get(getProduct);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
