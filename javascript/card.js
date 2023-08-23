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

    //on ajoute un listenner pour la close avec echap ou clic à côté
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        card.classList.remove('clicked');
      }
    });
  });
});
