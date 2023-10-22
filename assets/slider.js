const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]

// Déclaration des variables et constantes
// flèches de navigation 
const leftArrow = document.getElementById('arrow_Left');
const rightArrow = document.getElementById('arrow_Right');
// Sélection du conteneur des dots
const dotsContainer = document.getElementById('dotsContainer');
// Définit la valeur par defaut du "currentSlideIndex"
let currentSlideIndex = 0;
// Définit la valeur de "totalSlides" pour quelle soit égale au nombre d'élements dans le tableau
const totalSlides = slides.length;



// Fonction pour créer les dots
function createDots() {
	// Boucle pour faire en sorte que tant que i est inférieur au nombre total de slides, on incrémente de 1
    for (let i = 0; i < totalSlides; i++) {
		// Crée un nouvel élément div avec la classe 'dot'
        const dot = document.createElement('div');
        dot.classList.add('dot');
		// Ajoute un écouteur d'événements 'click' au dot
        dot.addEventListener('click', function() {
            // Pour mettre à jour la slide lorsqu'un dot est cliqué
            currentSlideIndex = i;
			// update de "currentSlideIndex"
            updateSlide(currentSlideIndex);
        });
		// Ajoute le dot au conteneur 'dotsContainer'
        dotsContainer.appendChild(dot);
    }
}

// Mettre à jour les dots actifs
function updateDots() {
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach(dot => dot.classList.remove('active'));
    allDots[currentSlideIndex].classList.add('active');
}

// Mettez à jour les dots chaque fois que vous mettez à jour la slide
function updateSlide(index) {
    const slideImage = document.getElementById('slide');
    const tagLine = document.getElementById('tagLine');
    slideImage.src = './assets/images/slideshow/' + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;
    updateDots(); // Appelez la fonction pour mettre à jour les dots actifs
}

// Initialisation de la slide active et du dot actif au chargement de la page
window.addEventListener('load', function() {
    createDots(); // Appel de la fonction pour créer les dots
    updateSlide(currentSlideIndex); // Met à jour la slide active
    updateDots(); // Met à jour le dot actif
});

// Définit l'action des flèches 
leftArrow.addEventListener('click', function() {
	// "currentSlideIndex" est décrémenté lorsqu'on clique sur la flèche gauche
    currentSlideIndex = currentSlideIndex - 1;
	// Si "currentSlideIndex" est inférieur à zéro, on le fait passer au dernier slide. Donc 4 - 1 = 3 
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
	// update de "currentSlideIndex"
    updateSlide(currentSlideIndex);
});


rightArrow.addEventListener('click', function() {
	// "currentSlideIndex" est incrémenté lorsqu'on clique sur la flèche droite
    currentSlideIndex = currentSlideIndex + 1;
	// Si "currentSlideIndex" est supérieur au total des slides alors on le réinitialise à 0, notre premier slide
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
	// update de "currentSlideIndex"
    updateSlide(currentSlideIndex);
});







