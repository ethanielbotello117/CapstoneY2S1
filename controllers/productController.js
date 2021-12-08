const Product = require("../Models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const {
    params: { name: productName },
  } = req;

  const product = await Product.findOne({
    name: productName,
  });

  if (!product) {
    const createdProduct = await Product.create(req.body);
    res.status(200).json({ createdProduct });
  }
};

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products })
}

const DeleteProduct = async (req, res) => {
  const {
    params: { id: productID },
  } = req;

  const product = await Product.findByIdAndRemove({
    _id: productID,
  });

  if (!product) {
    throw new NotFoundError(`No Job with the id of ${productID}`);
  }

  res.status(StatusCodes.OK).json({ product });
}

const getProduct = async (req, res) => {
  const { id: productID } = req.params;

  const product = await Product.findOne({
    _id: productID,
  });

  if (!product) {
    throw new NotFoundError(`no product with the id of ${productID}`);
  }

  res.status(StatusCodes.OK).json({ product });};


module.exports = { createProduct, getAllProducts, getProduct, DeleteProduct }