# CapstoneY2S1

# models

## product

- name*
    - String

- Price*
    - Number

- image\*
    - String (this is a url to the image storage)

## cart

- name*
    - String

- Price*
    - Number

- image\*
    - String (this is a url to the image storage)

- quantity
    - Number

# Controllers

### Uploading images

- uploadImage
    - Takes a req.file and places that file into the local storage

### Handling Products

- createProduct
    - Creates a document on the DB of a new product

- getAllProducts
    - Find all products on DB

- getProduct
    - Finds a product by its ID and fetches it from the DB

- clearProducts
    - Finds and removes all items inside of products DB
    
- deleteProduct
    - Finds a single product by its ID and removes it from the DB

### Handling Cart Items
- CreatecartProduct
    - Creates copy of the product selected and if ran more than once it will add increase and display the new quantity amount

- getAllCartProducts
    - Finds and returns all product stored inside cart

- clearCart
    - Finds and removes all items inside of cart DB

- removeCartItem
    - Finds a single product inside of the cart by its ID and removes it from the DB

# Routes
### productsRouter
- '/'
    - get - getAllProducts
    - post - createProduct
    - delete - clearProducts
- '/uploads'
    - post - uploadProductImage
- '/:id'
    - get - getProduct
    - delete - deleteProduct

### cartRouter
- '/'
    - get - getAllCartProducts
    - post - createCartProduct
    - delete - clearCart
- '/:id'
    - delete - removeCartItem