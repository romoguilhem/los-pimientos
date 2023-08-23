let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Fait défiler vers le haut
        document.querySelector("#navbar").classList.remove("hidden");
    } else {
        // Fait défiler vers le bas
        document.querySelector("#navbar").classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
});
