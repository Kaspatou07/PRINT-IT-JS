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


// flèches de navigation 
const leftArrow = document.getElementById('arrow_Left');
const rightArrow = document.getElementById('arrow_Right');

// Définit la valeur par defaut du "currentSlideIndex"
let currentSlideIndex = 0;

// Définit la valeur de "totalSlides" pour quelle soit égale au nombre d'élements dans le tableau
const totalSlides = slides.length;

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
	// Pour vérifier si tout va bien et pour différencier les cliques gauche ou droite
	console.log('Flèche gauche cliquée. Nouvel index de la diapositive :', currentSlideIndex);
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
	// Pour vérifier si tout va bien et pour différencier les cliques gauche ou droite
	console.log('Flèche droite cliquée. Nouvel index de la diapositive :', currentSlideIndex);
});



// Pour mettre à jour l'image et le tagline en fonction du numéro de l'index
function updateSlide(index) {
	// Element qui doivent être mis a jour
    const slideImage = document.getElementById('slide');
    const tagLine = document.getElementById('tagLine');
    slideImage.src = './assets/images/slideshow/' + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;

	// Mettre à jour les dots
	// Pour selectionner tous les dot
    const dots = document.querySelectorAll('.dot');
	// Pour retirer la fonction "active" de tous les dot
    dots.forEach(dot => dot.classList.remove('active'));
	// Pour activer seulement le dot de l'index en cours
    dots[index].classList.add('active');
}
