// Ouvrir la modale en cliquant sur le bouton
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fermer la modale en cliquant sur le bouton de fermeture ou en cliquant en dehors de la modale
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
