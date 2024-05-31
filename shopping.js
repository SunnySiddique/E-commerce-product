const cartContainer = document.querySelector(".cart-body-container");

document.addEventListener("DOMContentLoaded", (event) => {
  const closeBtn = document.getElementById("closeBtn");

  const cart_view_btn_containers = document.getElementById(
    "cart_view_btn_containers"
  );

  const cart_view_btn_container = document.getElementById(
    "cart_view_btn_container"
  );

  const shopping_cart = document.querySelector(".shopping-cart-container");

  // Initially hide the shopping cart
  shopping_cart.style.display = "none";

  cart_view_btn_containers.addEventListener("click", () => {
    if (shopping_cart.style.display === "none") {
      shopping_cart.style.display = "block";
    } else {
      shopping_cart.style.display = "none";
    }
  });

  cart_view_btn_container.addEventListener("click", () => {
    if (shopping_cart.style.display === "none") {
      shopping_cart.style.display = "block";
    } else {
      shopping_cart.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", () => {
    shopping_cart.style.display = "none";
  });
});

// Function to change quantity
function changeQuantity(element, delta) {
  const qtyInput = element
    .closest(".qty-container")
    .querySelector(".qty-input");
  let currentValue = parseInt(qtyInput.value, 10);
  currentValue += delta;
  if (currentValue < 1) currentValue = 1;
  qtyInput.value = currentValue;
}

// Event delegation for the cart container
cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("increaseBtn")) {
    changeQuantity(event.target, 1);
  } else if (event.target.classList.contains("decreaseBtn")) {
    changeQuantity(event.target, -1);
  }
});
