# CapstoneY2S1

# models

## product

- name*
    - String

- Price*
    - Number

- image\*
    - String (this is a url to the image storage)

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
    
- deleteProduct
    - Finds a single product by its ID and removes it from the DB

# Routes
### productsRoute
- '/'
    - post - createProduct
    - get - getAllProducts
- '/uploads'
    - post - uploadProductImage
- '/:id'
    - get - getProduct
    - delete - deleteProduct