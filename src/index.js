document.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    var section5 = document.querySelector('.section-5');

    // Calcola la traslazione in base allo scrolling
    var translationValue = -scroll / 5;

    // Applica la traslazione al div section-5
    section5.style.transform = 'translateX(' + translationValue + 'px)';
});