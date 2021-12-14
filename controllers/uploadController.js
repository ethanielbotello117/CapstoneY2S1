const path = require("path");

const uploadProductImage = async (req, res) => {
    if(!req.files) {
        throw new Error('no file added')
    }

  // console.log(req.files);
  const productImage = req.files.image;

  if(!productImage.mimetype.startsWith('image')) {
    throw new Error('CHOOSE AN IMAGE ONLY!!!')
  }

  const maxSize = 1024 * 1024
  if(productImage.size > maxSize) {
      throw new Error('jgsiogiogfusadjfisahf7iuer8oh')
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads",
    productImage.name
  );
    await productImage.mv(imagePath)

    res.status(200).json({image:{src: `/uploads/${productImage.name}`}})
};

module.exports = { uploadProductImage };
