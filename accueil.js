//debut menu hamburger
const menu = document.querySelector(".menu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.querySelector(".menu .close");

openBtn.addEventListener("click", () => {
    menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
});
//fin menu hamburger