let open = document.getElementById("open");
let close = document.getElementById("close");
const container = document.querySelector(".container");

function openNav() {
  container.classList.add("show-nav");
}
function closeNav() {
  container.classList.remove("show-nav");
}

open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
