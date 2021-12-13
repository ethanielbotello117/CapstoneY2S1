const Cart = require("../Models/Cart")

const createCartProduct = async (req, res) => {
    const productName = req.body.name;
  
    const product = await Cart.findOne({
      name: productName,
    });
  
    if (!product) {
      const createdProduct = await Cart.create(req.body);
      res.status(200).json({ createdProduct });
    } else {
      throw new Error(`Product with name ${Cart.name} already exists`);
    }
  };

const getAllCartProducts = async (req, res) => {
    const products = await Cart.find({});
    res.status(200).json({ products });
  };

  module.exports = createCartProduct
  module.exports = {createCartProduct, getAllCartProducts}