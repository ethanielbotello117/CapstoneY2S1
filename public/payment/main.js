// require("dotenv").config()
const url = "/api/v1/cart";
const container = document.querySelector(".container");

let total = 0;

const purchase = [
  { id: "1", name: "T-shirt", price: 1999 },
  { id: "1", name: "shoes", price: 4999 },
];

async function addQuantities() {
  try {
    const {
      data: { cartItems },
    } = await axios.get(url);
    cartItems.map((each) => {
      const quantities = each.quantity
      total = total + (each.price*quantities);
      // return `<p>Quantity: ${each.quantity}</p>`;
    });
    // console.log(total);
    container.innerHTML = `<p>Subtotal: ${total}</p>`;
    container.innerHTML = `<p>Shipping Fee: ${shipping}</p>`;
  } catch (error) {
    console.log(error);
  }

  console.log(total);

  const total_amount = total;
  const shipping_fee = total;

  // var stripe = require("stripe")(process.env.PUBLIC_KEY);
  var stripe = Stripe(
    "pk_test_51K4A12D9JxpHDPgGo7CBHQX75iWhPpI0kr5dJWq0HFlRAwT0sj2vi0W7lmjLlb0xZS7bI5FCXZssL3BjUXjPJVCJ00GwnqG8zq"
  );

  document.querySelector("button").disabled = true;
  fetch("/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ purchase, total_amount, shipping_fee }),
  })
    .then(function (result) {
      return result.json();
    })

    .then(function (data) {
      var elements = stripe.elements();
      var style = {
        base: {
          color: "32325d",
          fontFamily: "Arial, sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d",
          },
        },
        invalid: {
          fontFamily: "Arial, sans-serif",
          color: "#fa757a",
          iconColor: "#fa755a",
        },
      };

      var card = elements.create("card", { style: style });

      card.mount("#card-element");

      card.on("change", function (e) {
        document.querySelector("button").disabled = e.empty;
        document.querySelector("#card-error").textContent = e.error
          ? e.error.message
          : "";
      });

      var form = document.getElementById("payment-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        payWithCard(stripe, card, data.clientSecret);
      });
    });

  // Calls stripe.confirmCardPayment
  // if the card requires authentication stripe shows a pop-up model to prompt the user to enter authentication details without leaving the page

  const payWithCard = function (stripe, card, clientSecret) {
    loading(true);
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      })
      .then(function (result) {
        if (result.error) {
          showError(result.error.message);
        } else {
          orderComplete(result.paymentIntent.id);
        }
      });
  };

  const orderComplete = function (paymentIntentId) {
    loading(false);
    document
      .querySelector(".result-message a")
      .setAttribute(
        "href",
        "https://dashboard.stripe.com/total/payments" + paymentIntentId
      );
    document.querySelector("/result-message").classList.remove("hidden");
    document.querySelector("button").disabled = true;
  };

  const showError = function (errorMsgText) {
    loading(false);
    const errorMsg = document.querySelector("#card-error");
    error.textContent = errorMsgText;
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 4000);
  };

  const loading = function (isLoading) {
    if (isLoading) {
      document.querySelector("button").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("button").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  };
}
addQuantities();
