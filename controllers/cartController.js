const Cart = require("../Models/Cart");
const { StatusCodes } = require("http-status-codes");

const createCartProduct = async (req, res) => {
  const productName = req.body.name;

  const product = await Cart.findOne({
    name: productName,
  });

  if (!product) {
    const createdProduct = await Cart.create(req.body);
    res.status(200).json({ createdProduct });
  } else {
    throw new Error(`Product with name ${product.name} already exists`);
  }
};

const getAllCartProducts = async (req, res) => {
  const products = await Cart.find({});
  res.status(200).json({ products });
};

const clearCart = async (req, res) => {
  const cartItems = await Cart.deleteMany({});
  res.status(200).json({ cartItems });
};

const removeCartItem = async (req, res) => {
  const {
    params: { id: cartID },
  } = req;

  const cartItem = await Cart.findByIdAndRemove({
    _id: cartID,
  });

  if (!cartItem) {
    throw new Error(`No item with the id of ${cartID}`);
  }

  res.status(StatusCodes.OK).json({ cartItem });
};

module.exports = {
  createCartProduct,
  getAllCartProducts,
  clearCart,
  removeCartItem,
};
