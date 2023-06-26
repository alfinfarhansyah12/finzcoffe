// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");

  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

const searchForm = document.querySelector(".search-form");

document.querySelector("#search").onclick = () => {
  searchForm.classList.toggle("active");

  navbarNav.classList.remove("active");
  cartItem.classList.remove("active");
};

const cartItem = document.querySelector(".cart-items-container");

document.querySelector("#shopping-cart").onclick = () => {
  cartItem.classList.toggle("active");

  navbarNav.classList.remove("active");
  searchForm.classList.remove("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

window.onscroll = () => {
  navbarNav.classList.remove("active");
  searchForm.classList.remove("active");
};
