const url = "/api/v1/products";
const cartUrl = "/api/v1/cart";

const quantityInput = document.querySelector('#quantity')

const container = document.querySelector(".container");

const addCart = async (image, name, price, quantity) => {try {
    const cartItem = { image: image, name: name, price: price, quantity: quantity };
    
    // console.log(cartItem);
    await axios.post(cartUrl, cartItem);
  } catch (error) {
    console.log(error);
  }
};

async function fetchProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(url);
    const tempProducts = products
      .map((each) => {
        // console.log(each);
        let quantity = 1;
        return `<article class="product"><img src="${each.image}" alt="${each.name}" class="img"</img>
            <footer>
            <p class="name">${each.name}</p>
            <span>${each.price}</span>
            <button class="cart" id="bunger" onclick="addCart('${each.image}', '${each.name}', ${each.price}, ${quantity})">Add to Cart</button>
            </footer>
            </article>`;
      })
      .join("");
    container.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
