document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".brand-lists button");
  const headings = document.querySelectorAll(".brand-heading");

  // Set brand3 and its button as active by default
  const defaultButton = document.getElementById("brand-list-btn-3");
  const defaultHeading = document.querySelector("#brand3 .brand-heading");

  defaultButton.classList.add("active");
  defaultHeading.classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Remove active class from all headings
      headings.forEach((heading) => heading.classList.remove("active"));
      // Add active class to corresponding heading
      const targetId = button.parentElement.getAttribute("href");
      const targetHeading = document.querySelector(
        `${targetId} .brand-heading`
      );
      targetHeading.classList.add("active");
    });
  });
});
