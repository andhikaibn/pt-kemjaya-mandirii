// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika list barang di klik
document.querySelector("#list-barang").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const barang = document.querySelector("#list-barang");

document.addEventListener("click", function (e) {
  if (!barang.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
