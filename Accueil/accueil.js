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


// bouton retour au top

let boutonretour = document.getElementById("bouton");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    boutonretour.style.display = "block";
  } else {
    boutonretour.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // POUR Chrome, Firefox,et Opera 
}

boutonretour.addEventListener('click', topFunction);

//dark-mode
const switchBtn = document.getElementById('switch');
const body = document.body;

// 1. Vérifie si l'utilisateur a déjà choisi le mode sombre avant
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('darkmode');
}

// 2. Au clic sur le bouton
if (switchBtn) {
    switchBtn.addEventListener('click', () => {
        // Ajoute ou enlève la classe "darkmode" sur le body
        body.classList.toggle('darkmode');

        // Sauvegarde le choix dans le navigateur
        if (body.classList.contains('darkmode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}