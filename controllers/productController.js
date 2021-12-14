const Product = require("../Models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const productName = req.body.name;

  const product = await Product.findOne({
    name: productName,
  });

  if (!product) {
    const createdProduct = await Product.create(req.body);
    // console.log(`productName: ${productName}, product: ${product.name}`);
    res.status(200).json({ createdProduct });
  } else {
    throw new Error(`Product with name ${product.name} already exists`);
  }
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

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
};

const clearProducts = async (req, res) => {
  const products = await Product.deleteMany({})
  res.status(200).json({ products })
}

const getProduct = async (req, res) => {
  const { id: productID } = req.params;

  const product = await Product.findOne({
    _id: productID,
  });

  if (!product) {
    throw new NotFoundError(`no product with the id of ${productID}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

module.exports = { createProduct, getAllProducts, getProduct, DeleteProduct, clearProducts };
