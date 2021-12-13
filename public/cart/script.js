const url = "/api/v1/cart";
const container = document.querySelector(".container");

async function fetchProducts() {
    try {
      const {
        data: { products },
      } = await axios.get(url);
      const tempProducts = products
        .map((each) => {
          return `<article class="product">
              <footer>
              <p>${each.name}</p>
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