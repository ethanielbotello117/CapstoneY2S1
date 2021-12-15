const url = "/api/v1/cart";
const container = document.querySelector(".container");

async function fetchCartItems() {


    try {
      const {
        data: { cartItems },
      } = await axios.get(url);
      const tempCartItems = cartItems
        .map((each) => {
          return `<article class="product">
              <footer>
              <p>${each.name}</p>
              <p>Quantity: ${each.quantity}</p>
              </footer>
              </article>`;
        })
        .join("");
      container.innerHTML = tempCartItems;
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchCartItems();