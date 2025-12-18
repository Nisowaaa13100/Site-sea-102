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

<<<<<<< HEAD:Accueil/global.js
=======
/* ==========================================================================
   4. BARRE DE RECHERCHE (FONCTIONNELLE)
   ========================================================================== */
const searchInput = document.getElementById('search');
// On cible spécifiquement les articles qui sont dans la section principale
const articles = document.querySelectorAll('main section article');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        // 1. On récupère ce que l'utilisateur tape et on le met en minuscule
        const searchTerm = e.target.value.toLowerCase();

        // 2. On boucle sur chaque carte (article)
        articles.forEach(article => {
            // On récupère TOUT le texte de la carte (Titre h3 + Prix p + Liste ul)
            // .innerText permet de chercher aussi bien dans "Indian Forest" que dans "Pizzeria" ou "Dimanche"
            const content = article.innerText.toLowerCase();

            // 3. Vérification
            if (content.includes(searchTerm)) {
                // Si ça correspond, on affiche (remise à zéro du style display pour reprendre le CSS)
                article.style.display = ""; 
            } else {
                // Sinon, on cache
                article.style.display = "none";
            }
        });
    });
}
>>>>>>> a9ac614e50f64940c7f7ab4ff7f9608b94c66372:Accueil/Snacks/Snacks.js
