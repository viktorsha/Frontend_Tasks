let slideIndex = 1;

function plusSlides(slideNumber) {
    showSlides(slideIndex += slideNumber);
}

function showSlides(slideNumber) {
    const slides = document.querySelectorAll(".slider-item");
    if (slideNumber > slides.length) {
        slideIndex = 1;
    }
    if (slideNumber < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
