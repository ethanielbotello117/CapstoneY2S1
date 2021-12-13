const express = require("express");
const router = express.Router();

const {
    createCartProduct,
    getAllCartProducts
} = require('../controllers/cartController');

router.route("/").get(getAllCartProducts)
router.route("/").post(createCartProduct)

module.exports = router