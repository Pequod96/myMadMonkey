

if (window.matchMedia("(min-width: 768px)").matches) {
    document.addEventListener('scroll', function() {
        var scroll = window.scrollY;
        var section5 = document.querySelector('.section-5');

        // Calcola la traslazione in base allo scrolling
        var translationValue = -scroll / 5;

        // Applica la traslazione al div section-5
        section5.style.transform = 'translateX(' + translationValue + 'px)';
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link");
  
    links.forEach((link) => {
      link.addEventListener("click", function () {
        const checkbox = document.getElementById("navi-toggle");
        checkbox.checked = false; // Imposta il checkbox su "unchecked" dopo il clic sul link
      });
    });
  });