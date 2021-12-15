const Cart = require("../Models/Cart");
const { StatusCodes } = require("http-status-codes");

const createCartProduct = async (req, res) => {
  const productName = req.body.name;
  const product = await Cart.findOne({
    name: productName,
  });

  if (product) {
    await Cart.findOneAndUpdate({name: productName}, {$set:{quantity: product.quantity + 1}}, {new: true});
  } else {
    const createdProduct = await Cart.create(req.body);
    res.status(200).json({ createdProduct });
  }
};

const getAllCartProducts = async (req, res) => {
  const cartItems = await Cart.find({});
  res.status(200).json({ cartItems });
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
