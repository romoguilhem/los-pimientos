// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.card');

// Ajoutez un écouteur d'événements pour chaque carte
cards.forEach(card => {
  card.addEventListener('click', () => {
    //on aggrandit la card cliquée
    card.classList.toggle('clicked');
    
    //on récupère toutes les autres cards et on remove leur potentielle classe 'clicked'
    let otherCards = Array.from(cards).filter(otherCard => otherCard !== card);
    otherCards.forEach(otherCard => {
      otherCard.classList.contains('clicked') ? otherCard.classList.toggle('clicked') : undefined;
    });

    //on recentre la view sur la card cliquée
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });

    let navbar = document.querySelector("#navbar");
    setTimeout(function() {
      navbar.classList.add("hidden");
    }, 500);

    //on ajoute un listenner pour la close avec echap ou clic à côté (manquant)
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        card.classList.remove('clicked');
      }
    });
  });
});

// Gérer les cards comme des modals
const modalCard = document.querySelector('.modal-card');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.getElementById('modal-card-content');
const closeButton = document.querySelector('.close-card');

// Ajout d'un gestionnaire d'événements à chaque carte
cards.forEach(card => {
  card.addEventListener('click', () => {
      // Récupérer le contenu de la carte cliquée
      modalContent.innerHTML = card.innerHTML;

      // Afficher la modale
      modalCard.style.display = 'flex';
  });
});

// Gestionnaire d'événement pour fermer la modale en cliquant en dehors de celle-ci
closeButton.addEventListener('click', () => {
  modalCard.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalCard) {
      modalCard.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalCard.style.display = 'none';
  }
});
