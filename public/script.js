const url = "/api/v1/products";

const container = document.querySelector(".container");

const testing = (id) => {
  console.log(id)
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
            <button class="cart" id="bunger" onclick="testing(${each.price})">Add to Cart${each.name}</button>
            </footer>
            </article>`
      })
      .join("");
    container.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
