// Ensure no duplicate declarations
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeBtn = document.getElementById("closeBtn");
  const mobile_filter_main = document.querySelector(".mobile-filter-main");

  if (menuIcon && mobile_filter_main) {
    menuIcon.addEventListener("click", () => {
      mobile_filter_main.classList.add("open");
    });
  }
  closeBtn.addEventListener("click", () => {
    mobile_filter_main.classList.remove("open");
    document.style.body = mobile_filter_main.classList.remove("open");
  });
});
