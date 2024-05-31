const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const qtyInput = document.querySelector(".qty-input");

function changeQuantity(delta) {
  let currentValue = parseInt(qtyInput.value, 10);
  currentValue += delta;
  if (currentValue < 1) currentValue = 1; // Ensure the quantity does not go below 1
  qtyInput.value = currentValue;
}

// Event listeners for buttons
increaseBtn.addEventListener("click", () => changeQuantity(1));
decreaseBtn.addEventListener("click", () => changeQuantity(-1));
