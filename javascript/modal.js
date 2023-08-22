// Fonction pour ouvrir la modale
function openModal() {
  modal.style.display = 'flex';
}

// Fonction pour fermer la modale
function closeModal() {
  modal.style.display = 'none';
}

// Ouvrir la modale en cliquant sur le bouton
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");


openModalBtn.addEventListener("click", () => {
  openModal();
});

// Fermer la modale en cliquant sur le bouton de fermeture, en cliquant en dehors de la modale ou en appuyant sur Echap.
closeBtn.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
