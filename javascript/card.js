// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.card');

// Ajoutez un écouteur d'événements pour chaque carte
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});