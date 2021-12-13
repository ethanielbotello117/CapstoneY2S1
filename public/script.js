const url = "/api/v1/products";
const cartUrl = "/api/v1/cart";

const container = document.querySelector(".container");

const addCart = async (price) => {
  try {
    
    await axios.post(cartUrl, price);
  } catch (error) {
    console.log(error);
  }
}

async function fetchProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(url);
    const tempProducts = products
      .map((each) => {
        return `<article class="product"><img src="${each.image}" alt="${each.name}" class="img"</img>
            <footer>
            <p class="name">${each.name}</p>
            <span>${each.price}</span>
            <button class="cart" id="bunger" onclick="addCart(${each.price})">Add to Cart</button>
            </footer>
            </article>`
      }).join("");
    container.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
