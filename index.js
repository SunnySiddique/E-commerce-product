let sidebar = document.getElementById("sidebar");
let menuIcon = document.getElementById("res-menu-icon");
let category_menu_icon = document.getElementById("category_menu_icon");

const faqs = document.querySelectorAll(".faq");

menuIcon.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    menuIcon.innerHTML = `<i class='bx bx-menu'></i>`;
  } else {
    sidebar.classList.add("open");
    menuIcon.innerHTML = `<i class='bx bx-x'></i>`;
  }
});

category_menu_icon.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    menuIcon.innerHTML = `<i class='bx bx-menu'></i>`;
  } else {
    sidebar.classList.add("open");
    menuIcon.innerHTML = `<i class='bx bx-x'></i>`;
  }
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const tab1 = document.getElementById("tabOne");
const tab2 = document.getElementById("tabTwo");
const tab3 = document.getElementById("tabThree");
const tab4 = document.getElementById("tabFour");

const content1 = document.querySelector(".tab-1");
const content2 = document.querySelector(".tab-2");
const content3 = document.querySelector(".tab-3");
const content4 = document.querySelector(".tab-4");

function hideAllTabs() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";

  tab1.classList.remove("tab-active");
  tab2.classList.remove("tab-active");
  tab3.classList.remove("tab-active");
  tab4.classList.remove("tab-active");
}

tab1.addEventListener("click", () => {
  hideAllTabs();
  content1.style.display = "grid";
  tab1.classList.add("tab-active");
});

tab2.addEventListener("click", () => {
  hideAllTabs();
  content2.style.display = "block";
  tab2.classList.add("tab-active");
});

tab3.addEventListener("click", () => {
  hideAllTabs();
  content3.style.display = "block";
  tab3.classList.add("tab-active");
});

tab4.addEventListener("click", () => {
  hideAllTabs();
  content4.style.display = "block";
  tab4.classList.add("tab-active");
});

tab1.click();
