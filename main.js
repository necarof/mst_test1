'use strict'

window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
